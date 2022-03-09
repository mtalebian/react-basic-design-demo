import React from "react";
import * as bd from "react-basic-design";
import { Example, SourceCode } from "./demo-components";

export const FormDemo = () => {
    return (
        <div style={{ maxWidth: 800 }}>
            <h1>Form</h1>
            <p className="mb-5">responsive horizontal, vertical and inline forms.</p>

            <Example title="Horizontal Form" content="center">
                <bd.Form labelWidth="3">
                    <bd.FormRow label="Label">
                        <span>Static Text</span>
                    </bd.FormRow>

                    <bd.FormRow label="Input Text">
                        <input type="text" className="form-control" />
                    </bd.FormRow>

                    <bd.FormRow label="Radio button" controlClassName="m-s-n2">
                        <bd.Toggle radio name="radio-option" size="sm" label="Option1" />
                        <bd.Toggle radio name="radio-option" size="sm" label="Option2" className="m-s-3" />
                    </bd.FormRow>

                    <bd.FormRow controlClassName="m-s-n2">
                        <bd.Toggle label="Checkbox" size="sm" />
                    </bd.FormRow>

                    <bd.FormRow>
                        <bd.Button variant="contained">Submit</bd.Button>
                    </bd.FormRow>
                </bd.Form>
            </Example>
            <SourceCode
                lines={[
                    "<bd.Form labelWidth='3'>",
                    "    <bd.FormRow label='Label'>",
                    "        <span>Static Text</span>",
                    "    </bd.FormRow>",
                    "",
                    "    <bd.FormRow label='Input Text'>",
                    "        <input type='text' className='form-control' />",
                    "    </bd.FormRow>",
                    "",
                    "    <bd.FormRow label='Radio button' controlClassName='m-s-n2'>",
                    "        <bd.Toggle radio name='radio-option' size='sm' label='Option1' />",
                    "        <bd.Toggle radio name='radio-option' size='sm' label='Option2' className='m-s-3' />",
                    "    </bd.FormRow>",
                    "",
                    "    <bd.FormRow controlClassName='m-s-n2'>",
                    "        <bd.Toggle label='Checkbox' size='sm' />",
                    "    </bd.FormRow>",
                    "",
                    "    <bd.FormRow>",
                    "        <bd.Button variant='contained'>Submit</bd.Button>",
                    "    </bd.FormRow>",
                    "</bd.Form>",
                ]}
            />

            <Example title="Vertical FormRow" content="center">
                <bd.Form>
                    <bd.FormRow label="Label">
                        <span>Static Text</span>
                    </bd.FormRow>

                    <bd.FormRow label="Input Text">
                        <input type="text" className="form-control" />
                    </bd.FormRow>

                    <bd.FormRow label="Radio button" controlClassName="m-s-n2">
                        <bd.Toggle radio name="radio-option" size="sm" label="Option1" />
                        <bd.Toggle radio name="radio-option" size="sm" label="Option2" className="m-s-3" />
                    </bd.FormRow>

                    <bd.FormRow controlClassName="m-s-n2">
                        <bd.Toggle label="Checkbox" size="sm" />
                    </bd.FormRow>

                    <bd.FormRow>
                        <bd.Button variant="contained">Submit</bd.Button>
                    </bd.FormRow>
                </bd.Form>
            </Example>
            <SourceCode
                lines={[
                    "<bd.Form>",
                    "    <bd.FormRow label='Label'>",
                    "        <span>Static Text</span>",
                    "    </bd.FormRow>",
                    "",
                    "    <bd.FormRow label='Input Text'>",
                    "        <input type='text' className='form-control' />",
                    "    </bd.FormRow>",
                    "",
                    "    <bd.FormRow label='Radio button' controlClassName='m-s-n2'>",
                    "        <bd.Toggle radio name='radio-option' size='sm' label='Option1' />",
                    "        <bd.Toggle radio name='radio-option' size='sm' label='Option2' className='m-s-3' />",
                    "    </bd.FormRow>",
                    "",
                    "    <bd.FormRow controlClassName='m-s-n2'>",
                    "        <bd.Toggle label='Checkbox' size='sm' />",
                    "    </bd.FormRow>",
                    "",
                    "    <bd.FormRow>",
                    "        <bd.Button variant='contained'>Submit</bd.Button>",
                    "    </bd.FormRow>",
                    "</bd.Form>",
                ]}
            />

            <Example title="Inline Form" content="center">
                <bd.Form inline>
                    <bd.FormRow label="Label">
                        <span>Static Text</span>
                    </bd.FormRow>

                    <bd.FormRow label="Input Text">
                        <input type="text" className="form-control" />
                    </bd.FormRow>

                    <bd.FormRow label="Radio button">
                        <bd.Toggle radio name="radio-option" size="sm" label="Option1" />
                        <bd.Toggle radio name="radio-option" size="sm" label="Option2" className="m-s-3" />
                    </bd.FormRow>

                    <bd.FormRow label="Checkbox">
                        <bd.Toggle size="sm" />
                    </bd.FormRow>

                    <bd.FormRow label=" ">
                        <bd.Button variant="contained">Submit</bd.Button>
                    </bd.FormRow>
                </bd.Form>
            </Example>
            <SourceCode
                lines={[
                    "<bd.Form inline>",
                    "    <bd.FormRow label='Label'>",
                    "        <span>Static Text</span>",
                    "    </bd.FormRow>",
                    "",
                    "    <bd.FormRow label='Input Text'>",
                    "        <input type='text' className='form-control' />",
                    "    </bd.FormRow>",
                    "",
                    "    <bd.FormRow label='Radio button'>",
                    "        <bd.Toggle radio name='radio-option' size='sm' label='Option1' />",
                    "        <bd.Toggle radio name='radio-option' size='sm' label='Option2' className='m-s-3' />",
                    "    </bd.FormRow>",
                    "",
                    "    <bd.FormRow label='Checkbox'>",
                    "        <bd.Toggle size='sm' />",
                    "    </bd.FormRow>",
                    "",
                    "    <bd.FormRow label=' '>",
                    "        <bd.Button variant='contained'>Submit</bd.Button>",
                    "    </bd.FormRow>",
                    "</bd.Form>",
                ]}
            />
        </div>
    );
};
