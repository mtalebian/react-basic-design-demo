import React from "react";
import * as bd from "react-basic-design";
import SvgFavorite from "../icons/Favorite";
import SvgFavoriteBorder from "../icons/FavoriteBorder";
import SvgBookmark from "../icons/Bookmark";
import SvgBookmarkBorder from "../icons/BookmarkBorder";
import { Example, SourceCode } from "./demo-components";

export const CheckboxDemo = () => {
    return (
        <>
            <div style={{ width: 700 }}>
                <h1>Checkbox</h1>
                <p>
                    Use <code>Toggle</code> component to render a checkbox.
                </p>

                <Example title="Basic checkboxes" content="center" vertical={false}>
                    <bd.Toggle />
                    <bd.Toggle checked />
                    <bd.Toggle indeterminate />
                    <bd.Toggle disabled />
                    <bd.Toggle checked disabled />
                </Example>
                <SourceCode
                    lines={[
                        "<bd.Toggle />",
                        "<bd.Toggle checked />",
                        "<bd.Toggle indeterminate />",
                        "<bd.Toggle disabled />",
                        "<bd.Toggle checked disabled />",
                    ]}
                />

                <Example title="Label" content="center" vertical={false}>
                    <bd.Toggle label="Label" checked />
                    <bd.Toggle label="Disabled" disabled />
                </Example>
                <SourceCode lines={["<bd.Toggle label='Label' checked />", "<bd.Toggle label='Disabled' disabled />"]} />

                <Example title="Label placement" content="center" vertical={false}>
                    <bd.Toggle label="Start" labelPlacement="start" />
                    <bd.Toggle label="End" labelPlacement="end" />
                </Example>
                <SourceCode
                    lines={["<bd.Toggle label='Start' labelPlacement='start' />", "<bd.Toggle label='End' labelPlacement='end' />"]}
                />

                <Example title="Size" content="center" vertical={false}>
                    <bd.Toggle label="Small" size="sm" checked />
                    <bd.Toggle label="Compact" compact checked />
                    <bd.Toggle label="Normal" checked />
                    <bd.Toggle label="Large" size="lg" checked />
                    <bd.Toggle label="fontSize: 54" checked style={{ fontSize: 54 }} />
                </Example>
                <SourceCode
                    lines={[
                        "<bd.Toggle label='Small' size='sm' checked />",
                        "<bd.Toggle label='Compact' compact checked />",
                        "<bd.Toggle label='Normal' checked />",
                        "<bd.Toggle label='Large' size='lg' checked />",
                        "<bd.Toggle label='fontSize: 54' checked style={{ fontSize: 54 }} />",
                    ]}
                />

                <Example title="Color" content="center" vertical={false}>
                    <bd.Toggle checked />
                    <bd.Toggle color="secondary" checked />
                    <bd.Toggle color="default" checked />
                </Example>
                <SourceCode
                    lines={["<bd.Toggle checked />", "<bd.Toggle color='secondary' checked />", "<bd.Toggle color='default' checked />"]}
                />

                <Example title="Icon" content="center" vertical={false}>
                    <bd.Toggle checkedImage={<SvgFavorite />} uncheckedImage={<SvgFavoriteBorder />} />
                    <bd.Toggle checkedImage={<SvgBookmark />} uncheckedImage={<SvgBookmarkBorder />} />
                </Example>
                <SourceCode
                    lines={[
                        "<bd.Toggle checkedImage={<SvgFavorite />} uncheckedImage={<SvgFavoriteBorder />} />",
                        "<bd.Toggle checkedImage={<SvgBookmark />} uncheckedImage={<SvgBookmarkBorder />} />",
                    ]}
                />
            </div>
        </>
    );
};
