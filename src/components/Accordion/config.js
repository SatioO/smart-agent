export default [
    {
        id: "BookCover",
        title: "Book Cover",
        template: () => import("../Templates/BookCover")
    },
    {
        id: "ProfilePhoto",
        title: "Profile Photo",
        template: () => import("../Templates/ProfilePhoto")
    },
    {
        id: "ContactDetails",
        title: "Contact Details",
        template: () => import("../Templates/ContactDetails")
    },
    {
        id: "BookDetails",
        title: "Book Details",
        template: () => import("../Templates/BookDetails")
    }
];
