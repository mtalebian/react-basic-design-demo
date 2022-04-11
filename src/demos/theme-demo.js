import React from "react";
import * as bd from "react-basic-design";
import { Example } from "./demo-components";

export const ThemeDemo = () => {
    return (
        <>
            <div style={{ maxWidth: 700 }}>
                <h1 className="mb-5">Theme</h1>

                <Example title="Helper">
                    <pre className="px-3" style={{ lineHeight: 2.5 }}>
                        const the_name = bd.helper.<b className="text-secondary">getTheme()</b>
                        <br />
                        bd.helper.<b className="text-secondary">setTheme</b>(the_name)
                        <br />
                        var is_dark = bd.helper.<b className="text-secondary">isDarkMode()</b>
                        <br />
                        var is_rtl = bd.helper.<b className="text-secondary">getRTL()</b>
                        <br />
                        bd.helper.<b className="text-secondary">setRTL</b>( !is_rtl )
                    </pre>
                </Example>
            </div>
        </>
    );
};
