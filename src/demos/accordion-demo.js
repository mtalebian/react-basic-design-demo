import React from "react";
import * as bd from "react-basic-design";
import { Example, SourceCode } from "./demo-components";

export const AccordionDemo = () => {
    return (
        <div style={{ maxWidth: 800 }}>
            <h1 className="mb-5">Accordion</h1>

            <Example shaded title="Basic accordion">
                <div className="m-3 bg-default shadow-1 rounded">
                    <bd.Panel title="Accordion 1" size="md" caretPosition="end" variant="button" className="border-bottom">
                        <p className="p-4 m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
                            lobortis eget.
                        </p>
                    </bd.Panel>
                    <bd.Panel title="Accordion 2" size="md" caretPosition="end" variant="button" className="border-bottom">
                        <p className="p-4 m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
                            lobortis eget.
                        </p>
                    </bd.Panel>
                    <bd.Panel title="Accordion 3" size="md" caretPosition="end" variant="button" disabled>
                        <p className="p-4 m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
                            lobortis eget.
                        </p>
                    </bd.Panel>
                </div>
            </Example>
            <SourceCode
                lines={[
                    "<bd.Panel title='Accordion 1' size='md' caretPosition='end' variant='button' className='border-bottom'>",
                    "    <p>...</p>",
                    "</bd.Panel>",
                    "<bd.Panel title='Accordion 2' size='md' caretPosition='end' variant='button' className='border-bottom'>",
                    "    <p>...</p>",
                    "</bd.Panel>",
                    "<bd.Panel title='Accordion 3' size='md' caretPosition='end' variant='button' disabled>",
                    "    <p>...</p>",
                    "</bd.Panel>",
                ]}
            />

            <Example title="Controlled accordion" shaded>
                <div className="m-3 bg-default shadow-1 rounded">
                    <bd.Panel
                        size="md"
                        caretPosition="end"
                        variant="button"
                        className="border-bottom"
                        title={
                            <>
                                <div className="w-40">General settings</div>
                                <div className="w-60 text-shade-70">I am an accordion</div>
                            </>
                        }
                    >
                        <p className="p-4 m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
                            lobortis eget.
                        </p>
                    </bd.Panel>

                    <bd.Panel
                        size="md"
                        caretPosition="end"
                        variant="button"
                        className="border-bottom"
                        title={
                            <>
                                <div className="w-40">Users</div>
                                <div className="w-60 text-shade-70">You are not curently an owner</div>
                            </>
                        }
                    >
                        <p className="p-4 m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
                            lobortis eget.
                        </p>
                    </bd.Panel>
                </div>
            </Example>
            <SourceCode
                lines={[
                    "<bd.Panel size='md' caretPosition='end' variant='button' className='border-bottom'",
                    "    title={",
                    "    <>",
                    "        <div className='w-40'>General settings</div>",
                    "        <div className='w-60 text-shade-70'>I am an accordion</div>",
                    "    </>",
                    "    }",
                    ">",
                    "...",
                    "</bd.Panel>",
                    "",
                    "<bd.Panel size='md' caretPosition='end' variant='button' className='border-bottom'",
                    "    title={",
                    "    <>",
                    "        <div className='w-40'>Users</div>",
                    "        <div className='w-60 text-shade-70'>You are not curently an owner</div>",
                    "    </>",
                    "    }",
                    ">",
                    "...",
                    "</bd.Panel>",
                ]}
            />

            <Example title="More" shaded>
                <div className="m-3 bg-default shadow-1 rounded">
                    <bd.Panel title="General settings" size="md" variant="button" className="border-bottom" headerClassName="bg-shade-4">
                        <p className="p-4 m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
                            lobortis eget.
                        </p>
                    </bd.Panel>

                    <bd.Panel title="Users" size="md" variant="button" className="border-bottom" headerClassName="bg-shade-4">
                        <p className="p-4 m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
                            lobortis eget.
                        </p>
                    </bd.Panel>
                </div>
            </Example>
            <SourceCode
                lines={[
                    "<bd.Panel title='General settings' size='md' variant='button' className='border-bottom' headerClassName='bg-shade-4'>",
                    "    <p>...</p>",
                    "</bd.Panel>",
                    "",
                    "<bd.Panel title='Users' size='md' variant='button' className='border-bottom' headerClassName='bg-shade-4'>",
                    "    <p>...</p>",
                    "</bd.Panel>",
                ]}
            />
        </div>
    );
};
