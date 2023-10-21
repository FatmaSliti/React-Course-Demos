//our-domain.com/news

import Link from "next/Link";
import React, { Fragment } from "react";


function NewsPage() {
    return (
        <Fragment>
            <h1>The News Page</h1>
            <ul>
                <li>
                    <Link href="/news/something1">ReactJs is a great library</Link>
                </li>
                <li>NextJs is a framework built in React</li>
            </ul>
        </Fragment>
    );
}

export default NewsPage;
