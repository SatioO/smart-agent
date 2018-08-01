// GraphQL Query Builder
export const queryBuilder = options => {
    options.type = options.type ? options.type : "query";
    options.operation = options.operation ? options.operation : "";
    options.fields = options.fields ? options.fields : [];
    options.data = options.data ? options.data : {};
    options.variables = options.variables ? options.variables : {};

    return {
        query: `
        ${options.type} ${queryDataArgumentAndTypeMap(options.data)} {
            ${options.operation} ${queryDataNameAndArgumentMap(options.data)} {
                ${options.fields.join(",")}
            }
        }
    `,
        variables: Object.keys(options.data).reduce(
            (obj, key) => ({
                ...obj,
                [key]: options.data[key].value
            }),
            {}
        )
    };
};

// Private - Convert object to name and argument map eg: (id: $id)
function queryDataNameAndArgumentMap(data) {
    return Object.keys(data).length
        ? `(${Object.keys(data).reduce(
              (dataString, key, i) =>
                  `${dataString}${i !== 0 ? ", " : ""}${key}: $${key}`,
              ""
          )})`
        : "";
}

// Private - Convert object to argument and type map eg: ($id: Int)
function queryDataArgumentAndTypeMap(data) {
    return Object.keys(data).length
        ? `(${Object.keys(data).reduce((dataString, key, i) => {
              return `${dataString}${i !== 0 ? ", " : ""}$${key}: ${
                  data[key].type ? data[key].type : queryDataType(data[key])
              }${data[key].required ? "!" : ""}`;
          }, "")})`
        : "";
}

// Private - Get GraphQL equivalent type of data passed (String, Int, Float, Boolean)
function queryDataType(data) {
    switch (typeof data.value) {
        case "boolean":
            return "Boolean";
        case "number":
            return data.value % 1 === 0 ? "Int" : "Float";
        case "string":
        default:
            return "String";
    }
}
