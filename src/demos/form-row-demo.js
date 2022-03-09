import React from "react";
import * as bd from "react-basic-design";
import { Example, SourceCode } from "./demo-components";

export const FormRowDemo = () => {
    return (
        <div style={{ maxWidth: 600 }}>
            <h1>Form Row</h1>
            <p className="mb-5">responsive horizontal & vertical form row.</p>

            <Example title="Horizontal FormRow" content="center">
                <bd.FormRow label="Label" labelWidth={4}>
                    email@example.com
                </bd.FormRow>

                <bd.FormRow label="Input" labelWidth={4} htmlFor="inp1">
                    <input id="inp1" className="form-control" />
                </bd.FormRow>
            </Example>
            <SourceCode
                lines={[
                    "<bd.FormRow label='Label' labelWidth={4}>email@example.com</bd.FormRow>",
                    "",
                    "<bd.FormRow label='Input' labelWidth={4} htmlFor='inp1'>",
                    "	<input id='inp1' className='form-control' />",
                    "</bd.FormRow>",
                ]}
            />

            <Example title="Horizontal FormRow (without label)" content="center">
                <bd.FormRow labelWidth={4}>email@example.com</bd.FormRow>

                <bd.FormRow labelWidth={4}>
                    <input className="form-control" />
                </bd.FormRow>
            </Example>
            <SourceCode
                lines={[
                    "<bd.FormRow labelWidth={4}>email@example.com</bd.FormRow>",
                    "",
                    "<bd.FormRow labelWidth={4}>",
                    "	<input className='form-control' />",
                    "</bd.FormRow>",
                ]}
            />

            <Example title="Vertical FormRow" content="center">
                <bd.FormRow label="Label">email@example.com</bd.FormRow>
                <bd.FormRow label="Input" htmlFor="inp3">
                    <input id="inp3" className="form-control" />
                </bd.FormRow>
            </Example>
            <SourceCode
                lines={[
                    "<bd.FormRow label='Label'>email@example.com</bd.FormRow>",
                    "<bd.FormRow label='Input' htmlFor='inp3'>",
                    "	<input id='inp3' className='form-control' />",
                    "</bd.FormRow>",
                ]}
            />

            <Example title="Complex FormRow" content="center">
                <bd.FormRow label="Name" htmlFor="inp4" labelWidth={2} controlClassName="gap-3">
                    <input id="inp4" className="form-control" placeholder="First Name" />
                    <input className="form-control" placeholder="Last Name" />
                </bd.FormRow>

                <bd.FormRow label="More Responsive" htmlFor="inp5" labelWidth={2}>
                    <div className="row flex-grow-1 g-3">
                        <div className="col-md-6">
                            <input id="inp5" className="form-control" placeholder="First Name" />
                        </div>
                        <div className="col-md-6">
                            <input className="form-control" placeholder="Last Name" />
                        </div>
                    </div>
                </bd.FormRow>
            </Example>
            <SourceCode
                lines={[
                    "<bd.FormRow label='Name' htmlFor='inp4' labelWidth={2} controlClassName='gap-3'>",
                    "	<input id='inp4' className='form-control' placeholder='First Name' />",
                    "	<input className='form-control' placeholder='Last Name' />",
                    "</bd.FormRow>",
                    "",
                    "<bd.FormRow label='More Responsive' htmlFor='inp5' labelWidth={2}>",
                    "	<div className='row flex-grow-1 g-3'>",
                    "		<div className='col-md-6'>",
                    "			<input id='inp5' className='form-control' placeholder='First Name' />",
                    "		</div>",
                    "		<div className='col-md-6'>",
                    "			<input className='form-control' placeholder='Last Name' />",
                    "		</div>",
                    "	</div>",
                    "</bd.FormRow>",
                ]}
            />
        </div>
    );
};
