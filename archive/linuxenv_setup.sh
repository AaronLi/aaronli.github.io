#!/bin/bash

while read -p "SMB Address (ex: //127.0.0.1): " smb_ip
do
    if [[ $smb_ip = //* ]]
    then
        break
    else
        echo "SMB share address should start with //"
    fi
done

while read -p "SMB Share (ex: /storage): " smb_share
do
    if [[ $smb_share = /* ]]
    then
        break
    else
        echo "SMB share should start with /"
    fi
done

read -p "Mount point [/mnt$smb_share]: " smb_mount
smb_mount=${smb_mount:-/mnt$smb_share}

echo Creating drvfs share $smb_ip$smb_share mounted at $smb_mount

mkdir $smb_mount && mount -t drvfs $smb_ip$smb_share $smb_mount