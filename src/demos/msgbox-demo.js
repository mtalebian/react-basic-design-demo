import React from "react";
import * as bd from "react-basic-design";

export const MsgBoxDemo = () => {
    const callBasicModal = (e) => bd.msgbox("header", "body", "close");

    return (
        <div style={{ maxWidth: 800 }}>
            <bd.MsgBoxContainer />

            <h1 className="mb-5">MsgBox</h1>

            <h2>Initialize</h2>
            <div className="p-3 mb-5 bg-shade-5 rounded">
                <pre className="bd-default bg-default p-3">&lt;bd.MsgBoxContainer /&gt;</pre>
            </div>

            <h2>Basic msgbox</h2>
            <div className="p-3 mb-5 bg-shade-5 rounded">
                <pre className="bd-default bg-default p-3">msgbox("header", "body", "close")</pre>
                <bd.Button variant="contained" onClick={callBasicModal}>
                    Open Modal
                </bd.Button>
            </div>

            <h2>Add Buttons</h2>
            <div className="p-3 mb-5 bg-shade-5 rounded">
                <pre className="bd-default bg-default p-3">
                    msgbox("header", "body", [ &#123;title:"Close"&#125;, &#123;title:"Delete", action:(hide) =&gt; &#123; &#125; &#125;)
                </pre>
                <bd.Button
                    variant="contained"
                    onClick={(e) =>
                        bd.msgbox("header", "body", [
                            { title: "Close" },
                            {
                                title: "Delete",
                                action: (hide) => {
                                    alert("deleted");
                                    hide();
                                },
                            },
                        ])
                    }
                >
                    Open Modal
                </bd.Button>
            </div>
        </div>
    );
};
