import React from "react";
import { Link } from 'react-router-dom';
import {
    Button,
    UncontrolledTooltip,
} from "reactstrap";

function LinkButton({ to, children, className, onClick, icon, iconId, tooltip, type, showIcon = true, ...rest }) {
    // console.log(to)
    return (
        <Link
            to={to || '#'}
            className={`${className}`}
            onClick={onClick}
            type={type}
            {...rest}
            id={iconId}
        >
            {showIcon ? <i className={`${children ? 'me-2 ' : ''} ${icon}`} /> : <i ></i>}
            <span>{children}</span>
            <UncontrolledTooltip placement="top" target={iconId}>
                {tooltip}
            </UncontrolledTooltip>
        </Link>
    );
}
function CustomButton({ children, ...rest }) {
    return (
        <Button {...rest}>
            {children}
        </Button>
    );
}

function EditLinkSmall({ onClick, tooltip = 'Edit', ...rest }) {
    return (
        <LinkButton
            className="btn btn-sm btn-warning me-2"
            onClick={onClick}
            icon="bx bx-pencil"
            iconId="edittooltip"
            tooltip={tooltip}
            {...rest}
        />
    );
}

function AddLinkSmall({ onClick, ...rest }) {
    return (
        <LinkButton
            className="btn btn-sm btn-success me-2"
            onClick={onClick}
            icon="mdi mdi-plus"
            iconId="edittooltipAdd"
            tooltip="Add"
            {...rest}
        />
    );
}

function AddLinkMedium({ onClick, ...rest }) {
    return (
        <LinkButton
            className="btn btn-sm btn-success me-2"
            onClick={onClick}
            icon="mdi mdi-plus"
            iconId="edittooltipAdd"
            tooltip="Add"
            {...rest}
        />
    );
}

function AddLinkLarge({ onClick, ...rest }) {
    return (
        <LinkButton
            className="btn btn-sm btn-success me-2"
            onClick={onClick}
            icon="mdi mdi-plus"
            iconId="edittooltipAdd"
            tooltip="Add"
            {...rest}
        />
    );
}

function DetailLinkSmall({ onClick, ...rest }) {
    return (
        <LinkButton
            className="btn btn-sm btn-warning me-2"
            onClick={onClick}
            icon="mdi mdi-dots-vertical"
            iconId="detailtooltip"
            tooltip="details"
            {...rest}
        />
    );
}
function SearchLinkSmall({ onClick, ...rest }) {
    return (
        <LinkButton
            className="btn btn-sm btn-info me-2"
            onClick={onClick}
            icon="bx bx-search"
            iconId="drawing"
            tooltip="drawing"
            {...rest}
        />
    );
}

function ViewLinkSmall({ redirectTo, onClick, ...rest }) {

    // console.log(redirectTo)
    return (
        <LinkButton
            to={redirectTo}
            className="btn btn-sm btn-custom_primary me-2"
            onClick={onClick}
            icon="mdi mdi-eye"
            iconId="edittooltip1"
            tooltip="View"
            {...rest}
        />
    );
}
function ViewLinkMedium({ onClick, ...rest }) {
    return (
        <LinkButton
            className="btn btn-md btn-info me-2"
            onClick={onClick}
            icon="mdi mdi-eye"
            iconId="edittooltip1"
            tooltip="View"
            {...rest}
        />
    );
}

function ViewLinkLarge({ onClick, ...rest }) {
    return (
        <LinkButton
            className="btn btn-lg btn-info me-2"
            onClick={onClick}
            icon="mdi mdi-eye"
            iconId="edittooltip1"
            tooltip="View"
            {...rest}
        />
    );
}

function FileLinkSmall({ redirectTo, onClick, ...rest }) {

    // console.log(redirectTo)
    return (
        <LinkButton
            to={redirectTo}
            className="btn btn-sm btn-custom_primary me-2"
            onClick={onClick}
            icon="mdi mdi-file"
            iconId="file"
            tooltip="Photos"
            {...rest}
        />
    );
}
function FileLinkMedium({ onClick, ...rest }) {
    return (
        <LinkButton
            className="btn btn-md btn-custom_primary me-2"
            onClick={onClick}
            icon="mdi mdi-file"
            iconId="file"
            tooltip="Photos"
            {...rest}
        />
    );
}

function FileLinkLarge({ onClick, ...rest }) {
    return (
        <LinkButton
            className="btn btn-lg btn-custom_primary me-2"
            onClick={onClick}
            icon="mdi mdi-file"
            iconId="file"
            tooltip="Photos"
            {...rest}
        />
    );
}

function EditLinkMedium({ onClick, tooltip="Edit" }) {
    return (
        <LinkButton
            className="btn btn-md btn-warning me-2"
            onClick={onClick}
            icon="bx bx-pencil"
            iconId="edittooltip"
            tooltip={tooltip}
        />
    );
}

function SaveLinkSmall({ onClick,showIcon, children }) {
    return (
        <LinkButton
            className="btn btn-sm btn-custom_primary"
            onClick={onClick}
            showIcon={showIcon}
            icon="bx bxs-save"
            iconId="edittooltip"
            tooltip="Save"
        >{children}</LinkButton>
        
    );
}

function DeleteLinkSmall({ onClick, toolTip = "Delete" }) {
    return (
        <LinkButton
            className="btn btn-sm btn-danger me-2"
            onClick={onClick}
            icon="bx bx-trash"
            iconId="deletetooltip"
            tooltip={toolTip}
        />
    )
}

function DeleteLinkMedium({ onClick, icon = "mdi mdi-delete", tooltip = "Delete" }) {
    return (
        <LinkButton
            className="btn btn-md btn-danger me-2"
            onClick={onClick}
            icon={icon}
            iconId="deletetooltip"
            tooltip={tooltip}
        />
    )
}

function EditDetailsLinkSmall({ onClick }) {
    return (
        <LinkButton
            className="btn btn-sm btn-warning me-2"
            onClick={onClick}
            icon=" bx bx-pencil-box-multiple"
            iconId="editdeatailstooltip"
            tooltip="Edit Details"
        />
    );
}
function AddLinkButtonSmall({ onClick, children, showIcon = false }) {
    return (
        <LinkButton
            className="btn btn-sm btn-custom_primary "
            onClick={onClick}
            showIcon={showIcon}
            icon="mdi mdi-plus"
            iconId="addlinkbuttontooltip"
            tooltip="Edit Details"
        >
            {children}
            <i className='bx bx-plus ms-2' ></i>
        </LinkButton>
    );
}
function AddLinkButtonMedium({ onClick, children, type, showIcon = false }) {
    return (
        <LinkButton
            className="btn btn-md btn-custom_primary "
            type={type}
            onClick={onClick}
            showIcon={showIcon}
            icon="mdi mdi-plus"
            iconId="addlinkbuttontooltip"
            tooltip="Add"
        >{children}</LinkButton>
    );
}

function UploadButton({ onClick, children, showIcon = false }) {
    return (
        <LinkButton
            className="btn btn-sm btn-custom_primary "
            onClick={onClick}
            showIcon={showIcon}
            icon="bx bx-upload"
            iconId="upload_button"
            tooltip="Upload File"
        >{children}</LinkButton>
    );
}

export {
    ViewLinkSmall, ViewLinkMedium, ViewLinkLarge,
    EditLinkSmall, EditLinkMedium, DeleteLinkSmall,
    DeleteLinkMedium, SaveLinkSmall, EditDetailsLinkSmall,
    CustomButton, AddLinkButtonSmall, DetailLinkSmall,
    SearchLinkSmall, UploadButton, AddLinkButtonMedium,
    AddLinkLarge, AddLinkMedium, AddLinkSmall, FileLinkSmall,
    FileLinkMedium,
    FileLinkLarge
}