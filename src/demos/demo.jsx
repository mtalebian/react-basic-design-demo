import { useState } from "react";
import * as bd from "react-basic-design";
import SvgMenu from "../icons/Menu";
import { ButtonDemo } from "./button-demo";
import { ButtonGroupDemo } from "./button-group-demo";
import { CheckboxDemo } from "./checkbox-demo";
import { RadioDemo } from "./radio-demo";
import { SwitchDemo } from "./switch-demo";
import { TextFieldDemo } from "./text-field-demo";
import { AvatarDemo } from "./avatar-demo";
import { BadgeDemo } from "./badge-demo";
import { ListDemo } from "./list-demo";
import { TableDemo } from "./table-demo";
import { AppBarDemo } from "./appbar-demo";
import { AccordionDemo } from "./accordion-demo";
import { NewCssDemo } from "./newcss-demo";
import { ColorsDemo } from "./colors-demo";
import { MsgBoxDemo } from "./msgbox-demo";
import { FlexDemo } from "./flex-demo";
import { FormDemo } from "./form-demo";
import { FormRowDemo } from "./form-row-demo";
import { PanelDemo } from "./panel-demo";
import { TabsDemo } from "./tabs-demo";
import { PaperDemo } from "./paper-demo";
import { CardDemo } from "./card-demo";
import SvgDarkMode from "../icons/DarkMode";
import SvgFormatTextdirectionRToL from "../icons/FormatTextdirectionRToL";

export const Demo = () => {
    const [selectedItem, setSelectedItem] = useState();
    const items = [
        { header: "Inputs:", items: ["Button", "Button Group", "Checkbox", "Radio button", "Switch", "Text Field"] },
        { header: "Data Display:", items: ["Avatar", "Accordion", "Card", "Paper", "Panel"] },
        { header: "Surfaces:", items: ["AppBar", "Badge", "List", "Table"] },
        { header: "Navigation:", items: ["Tabs"] },
        { header: "Layout:", items: ["Form Row", "Form", "Flex"] },
        { header: "Utils:", items: ["MsgBox", "Colors", "New CSS"] },
    ];

    const toggleRTL = () => {
        bd.helper.setRTL(!bd.helper.getRTL());
    };

    const toggleDarkMode = () => {
        bd.helper.setTheme(bd.helper.isDarkMode() ? "bd-light" : "bd-dark");
    };

    return (
        <>
            <bd.AppBar position="static">
                <bd.Toolbar>
                    <bd.Button variant="icon" color="inherit" edge="start" href="/">
                        <SvgMenu />
                    </bd.Button>
                    <h5 className="appbar-title">React-Basic-Design Demo</h5>

                    <bd.Button variant="icon" color="inherit" onClick={toggleRTL} title="toggle RTL">
                        <SvgFormatTextdirectionRToL />
                    </bd.Button>
                    <bd.Button variant="icon" color="inherit" onClick={toggleDarkMode} title="toggle dark-mode">
                        <SvgDarkMode />
                    </bd.Button>
                </bd.Toolbar>
            </bd.AppBar>
            <div className="container-fluid py-3">
                <div className="row">
                    <div className="col" style={{ maxWidth: 300 }}>
                        <bd.List variant="menu" className="border bg-default" small compact>
                            {items.map((folder) => (
                                <bd.ListItem expanded primary={folder.header}>
                                    {folder.items.map((title) => (
                                        <bd.ListItem
                                            primary={title}
                                            onClick={() => setSelectedItem(title.toLowerCase().replace(" ", "-"))}
                                            className="text-primary"
                                            selected={selectedItem === title.toLowerCase().replace(" ", "-")}
                                        />
                                    ))}
                                </bd.ListItem>
                            ))}
                        </bd.List>
                    </div>
                    <div className="col-12 col-lg-8">
                        {selectedItem === "button" ? (
                            <ButtonDemo />
                        ) : selectedItem === "button-group" ? (
                            <ButtonGroupDemo />
                        ) : selectedItem === "checkbox" ? (
                            <CheckboxDemo />
                        ) : selectedItem === "radio-button" ? (
                            <RadioDemo />
                        ) : selectedItem === "switch" ? (
                            <SwitchDemo />
                        ) : selectedItem === "text-field" ? (
                            <TextFieldDemo />
                        ) : selectedItem === "avatar" ? (
                            <AvatarDemo />
                        ) : selectedItem === "badge" ? (
                            <BadgeDemo />
                        ) : selectedItem === "list" ? (
                            <ListDemo />
                        ) : selectedItem === "table" ? (
                            <TableDemo />
                        ) : selectedItem === "appbar" ? (
                            <AppBarDemo />
                        ) : selectedItem === "accordion" ? (
                            <AccordionDemo />
                        ) : selectedItem === "card" ? (
                            <CardDemo />
                        ) : selectedItem === "paper" ? (
                            <PaperDemo />
                        ) : selectedItem === "panel" ? (
                            <PanelDemo />
                        ) : selectedItem === "tabs" ? (
                            <TabsDemo />
                        ) : selectedItem === "form-row" ? (
                            <FormRowDemo />
                        ) : selectedItem === "form" ? (
                            <FormDemo />
                        ) : selectedItem === "flex" ? (
                            <FlexDemo />
                        ) : selectedItem === "msgbox" ? (
                            <MsgBoxDemo />
                        ) : selectedItem === "colors" ? (
                            <ColorsDemo />
                        ) : selectedItem === "new-css" ? (
                            <NewCssDemo />
                        ) : (
                            <>Select a menu item ...</>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
