// import React from 'react';
// import BookCover from "../LeftSideAccordions/BookCover";
// import ProfilePhoto from "../LeftSideAccordions/ProfilePhoto";
// import ContactDetails from "../LeftSideAccordions/ContactDetails";
// import BookDetails from "../LeftSideAccordions/BookDetails";

export default [
    {
        id: "BookCover",
        title: "Book Cover",
        template: () => import("../LeftSideAccordions/BookCover")
    },
    {
        id: "ProfilePhoto",
        title: "Profile Photo",
        template: () => import("../LeftSideAccordions/ProfilePhoto")
    },
    {
        id: "ContactDetails",
        title: "Contact Details",
        template: () => import("../LeftSideAccordions/ContactDetails")
    },
    {
        id: "BookDetails",
        title: "Book Details",
        template: () => import("../LeftSideAccordions/BookDetails")
    }
];
