import React from 'react';

function ListG(props) {
    return (
        <div>

            <ul className="list-group" style={{
                "background": "aliceblue",
                "text-align": "left",
                "width": "1000px",
                "position": "relative"

            }} >
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
            </ul>

        </div>
    );
}

export default ListG;