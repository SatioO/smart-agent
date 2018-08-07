// import React from 'react';
// import BookCover from "../LeftSideAccordions/BookCover";
// import ProfilePhoto from "../LeftSideAccordions/ProfilePhoto";
// import ContactDetails from "../LeftSideAccordions/ContactDetails";
// import BookDetails from "../LeftSideAccordions/BookDetails";

export default [
    {
        id: "BookCover",
        title: "Book Cover",
        open: true,

        template: () => import("../LeftSideAccordions/BookCover")
    },
    {
        id: "ProfilePhoto",
        title: "Profile Photo",
        open: false,

        template: () => import("../LeftSideAccordions/ProfilePhoto")
    },
    {
        id: "ContactDetails",
        title: "Contact Details",
        open: false,

        template: () => import("../LeftSideAccordions/ContactDetails")
    },
    {
        id: "BookDetails",
        title: "Book Details",
        open: false,

        template: () => import("../LeftSideAccordions/BookDetails")
    }
];
