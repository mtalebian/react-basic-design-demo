import React from "react";
import SvgAdd from "../icons/Add";
import * as bd from "react-basic-design";
import { Example, SourceCode, Props } from "./demo-components";

export const TextFieldDemo = () => {
    return (
        <>
            <div style={{ maxWidth: 600 }}>
                <h1 className="mb-5">Text Field</h1>

                <Example title="Basic TextField" vertical={false}>
                    <bd.TextField variant="outline" value="Outline" />
                    <bd.TextField variant="fill" value="Fill" />
                    <bd.TextField variant="standard" value="Standard" />
                </Example>
                <SourceCode
                    lines={["<bd.TextField variant='outline' />", "<bd.TextField variant='fill' />", "<bd.TextField variant='standard' />"]}
                />

                <Example title="Add Button">
                    <bd.TextField buttonIcon={<SvgAdd />} buttonOnClick={(e) => alert("clicked!")} />
                </Example>
                <SourceCode lines="<bd.TextField buttonIcon={<SvgAdd />} buttonOnClick={...} />" />

                <Example title="Standard form attributes">
                    <bd.Flex wrap gap={3}>
                        <bd.TextField value="ReadOnly" readOnly />
                        <bd.TextField value="Disabled" disabled />
                        <bd.TextField placeholder="Password" type="password" />
                        <bd.TextField placeholder="Number" type="number" />
                        <bd.TextField placeholder="Search" type="search" />
                    </bd.Flex>

                    <bd.Flex wrap gap={3} className="my-5">
                        <bd.TextField variant="fill" value="ReadOnly" readOnly />
                        <bd.TextField variant="fill" value="Disabled" disabled />
                        <bd.TextField variant="fill" placeholder="Password" type="password" />
                        <bd.TextField variant="fill" placeholder="Number" type="number" />
                        <bd.TextField variant="fill" placeholder="Search" type="search" />
                    </bd.Flex>

                    <bd.Flex wrap gap={3}>
                        <bd.TextField variant="standard" value="ReadOnly" readOnly />
                        <bd.TextField variant="standard" value="Disabled" disabled />
                        <bd.TextField variant="standard" placeholder="Password" type="password" />
                        <bd.TextField variant="standard" placeholder="Number" type="number" />
                        <bd.TextField variant="standard" placeholder="Search" type="search" />
                    </bd.Flex>
                </Example>
                <SourceCode
                    lines={[
                        "<bd.TextField readOnly />",
                        "<bd.TextField disabled />",
                        "<bd.TextField type='password' />",
                        "<bd.TextField type='number' />",
                        "<bd.TextField type='search' />",
                    ]}
                />

                <Example title="Validation error" vertical>
                    <bd.Flex gap={3}>
                        <bd.TextField placeholder="without error label" error="This field is required" />
                        <bd.TextField placeholder="with error label" error="This field is required" showErrorLabel />
                    </bd.Flex>
                    <bd.Flex gap={3}>
                        <bd.TextField variant="fill" placeholder="without error label" error="This field is required" />
                        <bd.TextField variant="fill" placeholder="with error label" error="This field is required" showErrorLabel />
                    </bd.Flex>
                    <bd.Flex gap={3}>
                        <bd.TextField variant="standard" placeholder="without error label" error="This field is required" />
                        <bd.TextField variant="standard" placeholder="with error label" error="This field is required" showErrorLabel />
                    </bd.Flex>
                </Example>
                <SourceCode
                    lines={[
                        "<bd.TextField error='This field is required' />",
                        "<bd.TextField error='This field is required' showErrorLabel />",
                    ]}
                />

                <Example title="Multiline" vertical>
                    <bd.TextField type="textarea" />
                    <bd.TextField type="textarea" variant="fill" />
                    <bd.TextField type="textarea" variant="standard" />
                </Example>
                <SourceCode
                    lines={[
                        "<bd.TextField type='textarea' />",
                        "<bd.TextField type='textarea' variant='fill'/>",
                        "<bd.TextField type='textarea' variant='standard'/>",
                    ]}
                />

                <Example title="Select" vertical>
                    <bd.TextField type="select" items={["Item One", "Item Two", "Item Three"]} />
                    <bd.TextField type="select" variant="fill" items={["Item One", "Item Two", "Item Three"]} />
                    <bd.TextField
                        type="select"
                        variant="standard"
                        items={[
                            { id: 1, title: "Item One" },
                            { id: 2, title: "Item Two" },
                            { id: 3, title: "Item Three" },
                        ]}
                    />
                </Example>
                <SourceCode
                    lines={[
                        "<bd.TextField type='select' items={['Item One', 'Item Two', 'Item Three']} />",
                        "<bd.TextField type='select' items={[{id: 1, title:'Item One'}, {id: 2, title: 'Item Two'}, {id: 3, title: 'Item Three'}]} />",
                    ]}
                />
            </div>

            <Props
                props="variant?: 'outline' | 'fill' | 'standard';    id?: string;    type?: 'textarea' | 'select' | 'text' | 'number' | 'email' | 'password' | 'search' | 'time' | 'url';    autoComplete?: 'on' | 'off';    spellCheck?: boolean;    readOnly?: boolean;    disabled?: boolean;    inputClassName?: string;    inputStyle?: CSSProperties | undefined;    inputRef?: any;    error?: string;    showErrorLabel?: boolean;    buttonIcon?: ReactNode;    buttonOnClick?: (e: any) => void;    className?: string;    height?: any;    width?: any;    maxWidth?: any;    style?: CSSProperties | undefined;    onChange: (e: any) => void;"
                defaults="variant = 'outline',    id,    type = 'text',    autoComplete = 'off',    spellCheck = false,    readOnly,    disabled,    inputClassName,    inputStyle,    inputRef,    error,    showErrorLabel,    buttonIcon,    buttonOnClick,    items,    className,    height,    width,    maxWidth,    style,    onChange,"
            />
        </>
    );
};
