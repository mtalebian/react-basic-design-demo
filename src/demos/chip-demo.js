import React from "react";
import * as bd from "react-basic-design";
import SvgDelete from "../icons/Delete";
import SvgDone from "../icons/Done";
import SvgFace from "../icons/Face";
import { Example, SourceCode } from "./demo-components";

export const ChipDemo = () => {
    return (
        <div style={{ maxWidth: 700 }}>
            <h1>Chip</h1>

            <Example title="Basic Chip" content="center" vertical={false}>
                <bd.Chip label="Chip Filled" />
                <bd.Chip label="Chip Outlined" outline />
            </Example>
            <SourceCode lines={["<bd.Chip label='Chip Filled' />", "<bd.Chip label='Chip Filled'  outline />"]} />

            <Example title="Clickable" content="center" vertical={false}>
                <bd.Chip label="Clickable" onClick={() => alert("clicked")} />
                <bd.Chip label="Clickable" outline onClick={() => alert("clicked")} />
            </Example>
            <SourceCode
                lines={[
                    "<bd.Chip label='Clickable' onClick={handleClick} />",
                    "<bd.Chip label='Clickable'  outline onClick={handleClick}/>",
                ]}
            />

            <Example title="Deletable" content="center" vertical={false}>
                <bd.Chip label="Deletable" onDelete={() => alert("deleted")} />
                <bd.Chip label="Deletable" outline onDelete={() => alert("deleted")} />
            </Example>
            <SourceCode
                lines={[
                    "<bd.Chip label='Clickable' onDelete={handleDelete}  />",
                    "<bd.Chip label='Clickable'  outline onDelete={handleDelete} />",
                ]}
            />

            <Example title="Clickable and deletable" content="center" vertical={false}>
                <bd.Chip label="Clickable and deletable" onClick={() => alert("clicked")} onDelete={() => alert("deleted")} />
                <bd.Chip label="Clickable and deletable" outline onClick={() => alert("clicked")} onDelete={() => alert("deleted")} />
            </Example>
            <SourceCode
                lines={[
                    "<bd.Chip label='Clickable and deletable' onClick={handleClick} onDelete={handleDelete} />",
                    "<bd.Chip label='Clickable and deletable'  outline onClick={handleClick} onDelete={handleDelete} />",
                ]}
            />

            <Example title="Custom delete icon" content="center" vertical={false}>
                <bd.Chip
                    label="Custom delete icon"
                    onClick={() => alert("clicked")}
                    onDelete={() => alert("deleted")}
                    deleteIcon={<SvgDone />}
                />
                <bd.Chip
                    label="Custom delete icon"
                    outline
                    onClick={() => alert("clicked")}
                    onDelete={() => alert("deleted")}
                    deleteIcon={<SvgDelete />}
                />
            </Example>
            <SourceCode
                lines={[
                    "<bd.Chip label='Custom delete icon' onClick={handleClick} onDelete={handleDelete} deleteIcon={<SvgDelete />}/>",
                    "<bd.Chip label='Custom delete icon'  outline onClick={handleClick} onDelete={handleDelete} deleteIcon={<SvgDelete />}/>",
                ]}
            />

            <Example title="Avatar chip" content="center" vertical={false}>
                <bd.Chip icon={<bd.Avatar size="sm">M</bd.Avatar>} label="Avatar" />
                <bd.Chip icon={<bd.Avatar size="sm" src="https://mui.com//static/images/avatar/1.jpg" />} label="Avatar" outline />
            </Example>
            <SourceCode
                lines={[
                    "<bd.Chip icon={<bd.Avatar size='sm'>M</bd.Avatar>} label='Avatar'",
                    "<bd.Chip icon={<bd.Avatar size='sm' src='https://mui.com//static/images/avatar/1.jpg' />} label='Avatar'  outline",
                ]}
            />

            <Example title="Icon chip" content="center" vertical={false}>
                <bd.Chip icon={<SvgFace />} label="With Icon" />
                <bd.Chip icon={<SvgFace />} label="With Icon" outline />
            </Example>
            <SourceCode
                lines={["<bd.Chip icon={<SvgFace />} label='Clickable'", "<bd.Chip icon={<SvgFace />} label='Clickable'  outline"]}
            />

            <Example title="Color chip" content="center" vertical={false}>
                <bd.Chip label="Primary" className="bg-primary text-bg" />
                <bd.Chip label="Primary" className="text-primary border-primary" outline />
                <bd.Chip label="Secondary" className="bg-secondary text-bg" />
                <bd.Chip label="Secondary" className="text-secondary border-secondary" outline />
            </Example>
            <SourceCode
                lines={[
                    "<bd.Chip label='Primary' className='bg-primary text-bg' />",
                    "<bd.Chip label='Primary' className='text-primary border-primary' outline/>",
                    "<bd.Chip label='Secondary' className='bg-secondary text-bg' />",
                    "<bd.Chip label='Secondary' className='text-secondary border-secondary' outline/>",
                ]}
            />

            <Example title="Sizes chip" content="center" align="center" vertical={false}>
                <bd.Chip label="Normal" />
                <bd.Chip label="Normal" outline />
                <bd.Chip label="Medium" size="md" />
                <bd.Chip label="Medium" size="md" outline />
                <bd.Chip label="Small" size="sm" />
                <bd.Chip label="Small" size="sm" outline />
            </Example>
            <SourceCode lines={["<bd.Chip label='Small' size='sm' />", "<bd.Chip label='Small'  outline />"]} />
        </div>
    );
};
