import classNames from "classnames";
import React from "react";
import * as bd from "react-basic-design";

export const Example = ({ shaded, className, vertical = true, gap = 3, title, children, ...props }) => {
    return (
        <>
            <h2 className="mt-5">{title}</h2>
            <bd.Flex
                className={classNames(className, "p-3 rounded", { border: !shaded, "bg-shade-10": shaded })}
                vertical={vertical}
                gap={gap}
                {...props}
            >
                {children}
            </bd.Flex>
        </>
    );
};

export const SourceCode = ({ lines, expanded }) => {
    if (!lines) lines = [];
    if (!Array.isArray(lines)) lines = [lines];
    return (
        <bd.Panel
            variant="button"
            title="Source Code"
            className="bg-shade-80 text-shade-90 mt-3 mb-5 rounded"
            titleClassName="small"
            size="sm"
            expanded={expanded}
        >
            <pre className="p-3 m-0 bg-shade-50 rounded ltr" style={{ lineHeight: 1.75 }}>
                {lines.join("\r\n")}
            </pre>
        </bd.Panel>
    );
};

export const Props = ({ props, defaults }) => {
    const data = [];
    const dataDefaults = {};

    defaults = (defaults ?? "")?.split(",");
    for (let i = 0; i < defaults.length; i++) {
        const def = defaults[i].split("=");
        if (def.length === 2) {
            var n = def[0].trim();
            dataDefaults[n] = def[1].trim();
        }
    }

    props = props.split(";");
    for (let i = 0; i < props.length; i++) {
        const prop = props[i];
        if (prop) {
            const i = prop.indexOf(":");
            const n = i == -1 ? prop?.trim() : prop.substr(0, i).trim();
            const t = i == -1 ? null : prop.substr(i + 1).trim();
            if (n && n != "children" && n != "children?") {
                data.push({
                    name: n,
                    type: t,
                    default: dataDefaults[n.replace("?", "").trim()],
                });
            }
        }
    }

    return (
        <>
            <h2>Props</h2>
            <div className="mb-5 p-3">
                <bd.BasicTable
                    //hideHeader
                    columns={[
                        { name: "name", title: "Name", width: "12rem" },
                        { name: "default", title: "Default", className: "text-secondary", width: "12rem" },
                        { name: "type", title: "Type", className: "text-primary" },
                        //{ name: "description", title: "Description", className: "text-muted" },
                    ]}
                    data={data.sort((a, b) => a.name.localeCompare(b.name))}
                />
            </div>
        </>
    );
};
