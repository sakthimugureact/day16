import React from 'react'

function Task1() {
    return (
        <div>
            <h1>Introduction to Dynamic Routing in React</h1>

            <p>
                <b>Dynamic routing</b> is a crucial concept in React web development, especially when building Single Page Applications (SPAs).  Instead of having a fixed set of routes defined in advance, dynamic routes allow you to create routes whose structure depends on data or parameters.
            </p>

            <h2>What are Dynamic Routes?</h2>
            <p>
                In a traditional, static route setup, you might have routes like <code>/products</code>, <code>/about</code>, and <code>/contact</code>.  Each of these maps directly to a specific component.  With dynamic routing, a single route definition can match multiple URLs.  For example, <code>/products/:id</code> can match <code>/products/1</code>, <code>/products/2</code>, and <code>/products/abc</code>.  The <code>:id</code> part is a <i>parameter</i> that can change.
            </p>

            <h2>Use Cases in React</h2>
            <p>
                Dynamic routing is incredibly useful in many scenarios:
            </p>
            <ul>
                <li>
                    <b>Displaying Details:</b>  Showing detailed information about a specific item.  For instance, <code>/products/:id</code> to display details for a product with a given ID.  The <code>id</code> parameter is extracted from the URL.
                </li>
                <li>
                    <b>User Profiles:</b>  Navigating to different user profiles, such as <code>/users/:username</code>.
                </li>
                <li>
                    <b>Nested Content:</b> Creating nested structures. For example: /blog/:category/:post_id
                </li>
                <li>
                    <b>Parameterized Pages:</b> Creating pages that change based on URL parameters, such as search results (<code>/search?query=react</code>).
                </li>
            </ul>
            <hr></hr>
        </div>
    )
}

export default Task1