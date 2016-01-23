#pi-template

A basic template for building nodejs + pi applications.

##Setup
###Raspberry Pi B v1
- Use NOOBS_lite_v1_5 to install Raspbian Jessie
- Install nodejs //TODO: give details
- Ensure SSH is running

###Grunt Deploy to Pi Setup
Create a file named `grunt_ssh_config.json` in the root project directory with the following JSON:

    {
        "json_comment": "Connection details to the RPi. Make sure this is excluded in .gitignore and package.json", 
        "host": "XXX.XXX.XXX.XXX",
        "username": "pi",
        "password": "raspberry",
        "directory": "/home/pi/pinodes"
    }

Change the pertinent information as required. The `directory` field should be an absolute path to a place where this repository should be installed on the Pi.



##Grunt Integration

Uses Grunt to perform a variety of tasks, including deployment to a remote Pi.

#Pi Pinout Reference
Pi Revision 1

    wpi   bcm            hdr|hdr           bcm   wpi
    pin   gpio     name   L | R   name     gpio  pin
    ----  ----  -------  ---|---  -------  ----  ----
    null, null, '3.3v',  01,  02, '5v',    null, null,
    8,    0,    'SDA',   03,  04, '5v',    null, null,
    9,    1,    'SCL',   05,  06, '0v',    null, null,
    7,    4,    'GPIO7', 07,  08, 'TxD',   14,   15,
    null, null, '0v',    09,  10, 'RxD',   15,   16,
    0,    17,   'GPIO0', 11,  12, 'GPIO1', 18,   1,
    2,    21,   'GPIO2', 13,  14, '0v',    null, null,
    3,    22,   'GPIO3', 15,  16, 'GPIO4', 23,   4,
    null, null, '3.3v',  17,  18, 'GPIO5', 24,   5,
    12,   10,   'MOSI',  19,  20, '0v',    null, null,
    13,   9,    'MISO',  21,  22, 'GPIO6', 25,   6,
    14,   11,   'SCLK',  23,  24, 'CE0',   8,    10,
    null, null, '0v',    25,  26, 'CE1',   7,    11,

Pi Revision 2

    wpi   bcm            hdr|hdr           bcm   wpi
    pin   gpio     name   L | R   name     gpio  pin
    ----  ----  -------  ---|---  -------  ----  ----
    null, null, '3.3v',  01,  02, '5v',    null, null,
    8,    2,    'SDA',   03,  04, '5v',    null, null,
    9,    3,    'SCL',   05,  06, '0v',    null, null,
    7,    4,    'GPIO7', 07,  08, 'TxD',   14,   15,
    null, null, '0v',    09,  10, 'RxD',   15,   16,
    0,    17,   'GPIO0', 11,  12, 'GPIO1', 18,   1,
    2,    27,   'GPIO2', 13,  14, '0v',    null, null,
    3,    22,   'GPIO3', 15,  16, 'GPIO4', 23,   4,
    null, null, '3.3v',  17,  18, 'GPIO5', 24,   5,
    12,   10,   'MOSI',  19,  20, '0v',    null, null,
    13,   9,    'MISO',  21,  22, 'GPIO6', 25,   6,
    14,   11,   'SCLK',  23,  24, 'CE0',   8,    10,
    null, null, '0v',    25,  26, 'CE1',   7,    11,

##Architecture

Noobs

raspi-config

apt-get udate
apt-get upgrade
.install npm
.install node

