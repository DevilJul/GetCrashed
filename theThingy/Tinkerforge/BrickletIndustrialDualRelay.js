/* ***********************************************************
 * This file was automatically generated on 2018-10-05.      *
 *                                                           *
 * JavaScript Bindings Version 2.1.20                        *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generators git repository on tinkerforge.com       *
 *************************************************************/

var Device = require('./Device');
var IPConnection = require('./IPConnection');

BrickletIndustrialDualRelay.DEVICE_IDENTIFIER = 284;
BrickletIndustrialDualRelay.DEVICE_DISPLAY_NAME = 'Industrial Dual Relay Bricklet';
BrickletIndustrialDualRelay.CALLBACK_MONOFLOP_DONE = 5;
BrickletIndustrialDualRelay.FUNCTION_SET_VALUE = 1;
BrickletIndustrialDualRelay.FUNCTION_GET_VALUE = 2;
BrickletIndustrialDualRelay.FUNCTION_SET_MONOFLOP = 3;
BrickletIndustrialDualRelay.FUNCTION_GET_MONOFLOP = 4;
BrickletIndustrialDualRelay.FUNCTION_SET_SELECTED_VALUE = 6;
BrickletIndustrialDualRelay.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletIndustrialDualRelay.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletIndustrialDualRelay.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletIndustrialDualRelay.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletIndustrialDualRelay.FUNCTION_WRITE_FIRMWARE = 238;
BrickletIndustrialDualRelay.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletIndustrialDualRelay.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletIndustrialDualRelay.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletIndustrialDualRelay.FUNCTION_RESET = 243;
BrickletIndustrialDualRelay.FUNCTION_WRITE_UID = 248;
BrickletIndustrialDualRelay.FUNCTION_READ_UID = 249;
BrickletIndustrialDualRelay.FUNCTION_GET_IDENTITY = 255;
BrickletIndustrialDualRelay.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletIndustrialDualRelay.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletIndustrialDualRelay.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletIndustrialDualRelay.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletIndustrialDualRelay.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletIndustrialDualRelay.BOOTLOADER_STATUS_OK = 0;
BrickletIndustrialDualRelay.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletIndustrialDualRelay.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletIndustrialDualRelay.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletIndustrialDualRelay.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletIndustrialDualRelay.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletIndustrialDualRelay.STATUS_LED_CONFIG_OFF = 0;
BrickletIndustrialDualRelay.STATUS_LED_CONFIG_ON = 1;
BrickletIndustrialDualRelay.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletIndustrialDualRelay.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletIndustrialDualRelay(uid, ipcon) {
	//Two relays to switch AC/DC devices

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickletIndustrialDualRelay.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletIndustrialDualRelay.FUNCTION_SET_VALUE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialDualRelay.FUNCTION_GET_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDualRelay.FUNCTION_SET_MONOFLOP] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialDualRelay.FUNCTION_GET_MONOFLOP] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDualRelay.FUNCTION_SET_SELECTED_VALUE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialDualRelay.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDualRelay.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDualRelay.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDualRelay.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialDualRelay.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDualRelay.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialDualRelay.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDualRelay.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDualRelay.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialDualRelay.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialDualRelay.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDualRelay.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletIndustrialDualRelay.CALLBACK_MONOFLOP_DONE] = 'B ?';



	this.setValue = function(channel0, channel1, returnCallback, errorCallback) {
		/*
		Sets the state of the relays, *true* means on and *false* means off.
		For example: (true, false) turns relay 0 on and relay 1 off.
		
		If you just want to set one of the relays and don't know the current state
		of the other relay, you can get the state with :func:`Get Value` or you
		can use :func:`Set Selected Value`.
		
		Running monoflop timers will be overwritten if this function is called.
		
		The default value is (*false*, *false*).
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualRelay.FUNCTION_SET_VALUE, [channel0, channel1], '? ?', '', returnCallback, errorCallback, false);
	};
	this.getValue = function(returnCallback, errorCallback) {
		/*
		Returns the state of the relays, *true* means on and *false* means off.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualRelay.FUNCTION_GET_VALUE, [], '', '? ?', returnCallback, errorCallback, false);
	};
	this.setMonoflop = function(channel, value, time, returnCallback, errorCallback) {
		/*
		The first parameter can be 0 or 1 (relay 0 or relay 1). The second parameter
		is the desired state of the relay (*true* means on and *false* means off).
		The third parameter indicates the time (in ms) that the relay should hold
		the state.
		
		If this function is called with the parameters (1, true, 1500):
		Relay 1 will turn on and in 1.5s it will turn off again.
		
		A monoflop can be used as a failsafe mechanism. For example: Lets assume you
		have a RS485 bus and a Industrial Dual Relay Bricklet connected to one of the
		slave stacks. You can now call this function every second, with a time parameter
		of two seconds. The relay will be on all the time. If now the RS485
		connection is lost, the relay will turn off in at most two seconds.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualRelay.FUNCTION_SET_MONOFLOP, [channel, value, time], 'B ? I', '', returnCallback, errorCallback, false);
	};
	this.getMonoflop = function(channel, returnCallback, errorCallback) {
		/*
		Returns (for the given relay) the current state and the time as set by
		:func:`Set Monoflop` as well as the remaining time until the state flips.
		
		If the timer is not running currently, the remaining time will be returned
		as 0.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualRelay.FUNCTION_GET_MONOFLOP, [channel], 'B', '? I I', returnCallback, errorCallback, false);
	};
	this.setSelectedValue = function(channel, value, returnCallback, errorCallback) {
		/*
		Sets the state of the selected relay (0 or 1), *true* means on and *false*
		means off.
		
		The other relay remains untouched.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualRelay.FUNCTION_SET_SELECTED_VALUE, [channel, value], 'B ?', '', returnCallback, errorCallback, false);
	};
	this.getSPITFPErrorCount = function(returnCallback, errorCallback) {
		/*
		Returns the error count for the communication between Brick and Bricklet.
		
		The errors are divided into
		
		* ACK checksum errors,
		* message checksum errors,
		* framing errors and
		* overflow errors.
		
		The errors counts are for errors that occur on the Bricklet side. All
		Bricks have a similar function that returns the errors on the Brick side.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualRelay.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 'I I I I', returnCallback, errorCallback, false);
	};
	this.setBootloaderMode = function(mode, returnCallback, errorCallback) {
		/*
		Sets the bootloader mode and returns the status after the requested
		mode change was instigated.
		
		You can change from bootloader mode to firmware mode and vice versa. A change
		from bootloader mode to firmware mode will only take place if the entry function,
		device identifier and CRC are present and correct.
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualRelay.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 'B', returnCallback, errorCallback, false);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualRelay.FUNCTION_GET_BOOTLOADER_MODE, [], '', 'B', returnCallback, errorCallback, false);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualRelay.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', '', returnCallback, errorCallback, false);
	};
	this.writeFirmware = function(data, returnCallback, errorCallback) {
		/*
		Writes 64 Bytes of firmware at the position as written by
		:func:`Set Write Firmware Pointer` before. The firmware is written
		to flash every 4 chunks.
		
		You can only write firmware in bootloader mode.
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualRelay.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 'B', returnCallback, errorCallback, false);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualRelay.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', '', returnCallback, errorCallback, false);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualRelay.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 'B', returnCallback, errorCallback, false);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature in °C as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualRelay.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 'h', returnCallback, errorCallback, false);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualRelay.FUNCTION_RESET, [], '', '', returnCallback, errorCallback, false);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualRelay.FUNCTION_WRITE_UID, [uid], 'I', '', returnCallback, errorCallback, false);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualRelay.FUNCTION_READ_UID, [], '', 'I', returnCallback, errorCallback, false);
	};
	this.getIdentity = function(returnCallback, errorCallback) {
		/*
		Returns the UID, the UID where the Bricklet is connected to,
		the position, the hardware and firmware version as well as the
		device identifier.
		
		The position can be 'a', 'b', 'c' or 'd'.
		
		The device identifier numbers can be found :ref:`here <device_identifier>`.
		|device_identifier_constant|
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualRelay.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback, false);
	};
}

module.exports = BrickletIndustrialDualRelay;
