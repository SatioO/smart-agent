// import React from 'react';
// import BookCover from "../LeftSideAccordions/BookCover";
// import ProfilePhoto from "../LeftSideAccordions/ProfilePhoto";
// import ContactDetails from "../LeftSideAccordions/ContactDetails";
// import BookDetails from "../LeftSideAccordions/BookDetails";

export default [
    {
        id: "BookCover",
        targetID: "BookCover",
        title: "Book Cover",
        open: true,
        template: () => import("../LeftSideAccordions/BookCover")
    },
    {
        id: "ProfilePhoto",
        targetID: "ProfilePhoto",
        title: "Profile Photo",
        open: false,
        template: () => import("../LeftSideAccordions/ProfilePhoto")
    },
    {
        id: "ContactDetails",
        targetID: "ContactDetails",
        title: "Contact Details",
        open: false,
        template: () => import("../LeftSideAccordions/ContactDetails")
    },
    {
        id: "BookDetails",
        targetID: "BookDetails",
        title: "Book Details",
        open: false,
        template: () => import("../LeftSideAccordions/BookDetails")
    }
];
