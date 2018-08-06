import React from "react";
import BookCover from "../LeftSideAccordions/BookCover";

export default [
    {
        id: "BookCover",
        title: "Book Cover",
        heading: "headingOne",
        dataTarget: "bookCover",
        // template: () => <h1>Book Cover Component </h1>,
        template: BookCover
    },
    {
        id: "ProfilePhoto",
        title: "Profile Photo",
        heading: "headingTwo",
        dataTarget: "profilePhoto",
        template: () => <h1>Profile Photo Component </h1>
    },
    {
        id: "ContactDetails",
        title: "Contact Details",
        heading: "headingThree",
        dataTarget: "contactDetails",
        template: () => <h1>Contact Details Component </h1>
    },
    {
        id: "BookDetails",
        title: "Book Details",
        eading: "headingFour",
        dataTarget: "bookDetails",
        template: () => <h1>Book Details Component </h1>
    }
];
