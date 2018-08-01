import { queryBuilder } from "../commons";
const fields = ["id", "title", "text"];

export const SAMPLE_QUERY = () =>
    queryBuilder({
        type: "query",
        operation: "conservation",
        fields: [...fields],
        data: {
            body: {
                type: "TipsRecommendation",
                value: "body"
            }
        }
    });
