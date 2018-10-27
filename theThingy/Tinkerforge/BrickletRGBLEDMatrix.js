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

BrickletRGBLEDMatrix.DEVICE_IDENTIFIER = 272;
BrickletRGBLEDMatrix.DEVICE_DISPLAY_NAME = 'RGB LED Matrix Bricklet';
BrickletRGBLEDMatrix.CALLBACK_FRAME_STARTED = 11;
BrickletRGBLEDMatrix.FUNCTION_SET_RED = 1;
BrickletRGBLEDMatrix.FUNCTION_GET_RED = 2;
BrickletRGBLEDMatrix.FUNCTION_SET_GREEN = 3;
BrickletRGBLEDMatrix.FUNCTION_GET_GREEN = 4;
BrickletRGBLEDMatrix.FUNCTION_SET_BLUE = 5;
BrickletRGBLEDMatrix.FUNCTION_GET_BLUE = 6;
BrickletRGBLEDMatrix.FUNCTION_SET_FRAME_DURATION = 7;
BrickletRGBLEDMatrix.FUNCTION_GET_FRAME_DURATION = 8;
BrickletRGBLEDMatrix.FUNCTION_DRAW_FRAME = 9;
BrickletRGBLEDMatrix.FUNCTION_GET_SUPPLY_VOLTAGE = 10;
BrickletRGBLEDMatrix.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletRGBLEDMatrix.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletRGBLEDMatrix.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletRGBLEDMatrix.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletRGBLEDMatrix.FUNCTION_WRITE_FIRMWARE = 238;
BrickletRGBLEDMatrix.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletRGBLEDMatrix.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletRGBLEDMatrix.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletRGBLEDMatrix.FUNCTION_RESET = 243;
BrickletRGBLEDMatrix.FUNCTION_WRITE_UID = 248;
BrickletRGBLEDMatrix.FUNCTION_READ_UID = 249;
BrickletRGBLEDMatrix.FUNCTION_GET_IDENTITY = 255;
BrickletRGBLEDMatrix.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletRGBLEDMatrix.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletRGBLEDMatrix.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletRGBLEDMatrix.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletRGBLEDMatrix.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletRGBLEDMatrix.BOOTLOADER_STATUS_OK = 0;
BrickletRGBLEDMatrix.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletRGBLEDMatrix.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletRGBLEDMatrix.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletRGBLEDMatrix.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletRGBLEDMatrix.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletRGBLEDMatrix.STATUS_LED_CONFIG_OFF = 0;
BrickletRGBLEDMatrix.STATUS_LED_CONFIG_ON = 1;
BrickletRGBLEDMatrix.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletRGBLEDMatrix.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletRGBLEDMatrix(uid, ipcon) {
	//RGB LED Matrix with 8x8 pixel

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickletRGBLEDMatrix.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletRGBLEDMatrix.FUNCTION_SET_RED] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRGBLEDMatrix.FUNCTION_GET_RED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRGBLEDMatrix.FUNCTION_SET_GREEN] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRGBLEDMatrix.FUNCTION_GET_GREEN] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRGBLEDMatrix.FUNCTION_SET_BLUE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRGBLEDMatrix.FUNCTION_GET_BLUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRGBLEDMatrix.FUNCTION_SET_FRAME_DURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRGBLEDMatrix.FUNCTION_GET_FRAME_DURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRGBLEDMatrix.FUNCTION_DRAW_FRAME] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRGBLEDMatrix.FUNCTION_GET_SUPPLY_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRGBLEDMatrix.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRGBLEDMatrix.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRGBLEDMatrix.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRGBLEDMatrix.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRGBLEDMatrix.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRGBLEDMatrix.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRGBLEDMatrix.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRGBLEDMatrix.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRGBLEDMatrix.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRGBLEDMatrix.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRGBLEDMatrix.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRGBLEDMatrix.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletRGBLEDMatrix.CALLBACK_FRAME_STARTED] = 'I';



	this.setRed = function(red, returnCallback, errorCallback) {
		/*
		Sets the 64 red LED values of the matrix.
		*/
		this.ipcon.sendRequest(this, BrickletRGBLEDMatrix.FUNCTION_SET_RED, [red], 'B64', '', returnCallback, errorCallback, false);
	};
	this.getRed = function(returnCallback, errorCallback) {
		/*
		Returns the red LED values as set by :func:`Set Red`.
		*/
		this.ipcon.sendRequest(this, BrickletRGBLEDMatrix.FUNCTION_GET_RED, [], '', 'B64', returnCallback, errorCallback, false);
	};
	this.setGreen = function(green, returnCallback, errorCallback) {
		/*
		Sets the 64 green LED values of the matrix.
		*/
		this.ipcon.sendRequest(this, BrickletRGBLEDMatrix.FUNCTION_SET_GREEN, [green], 'B64', '', returnCallback, errorCallback, false);
	};
	this.getGreen = function(returnCallback, errorCallback) {
		/*
		Returns the green LED values as set by :func:`Set Green`.
		*/
		this.ipcon.sendRequest(this, BrickletRGBLEDMatrix.FUNCTION_GET_GREEN, [], '', 'B64', returnCallback, errorCallback, false);
	};
	this.setBlue = function(blue, returnCallback, errorCallback) {
		/*
		Sets the 64 blue LED values of the matrix.
		*/
		this.ipcon.sendRequest(this, BrickletRGBLEDMatrix.FUNCTION_SET_BLUE, [blue], 'B64', '', returnCallback, errorCallback, false);
	};
	this.getBlue = function(returnCallback, errorCallback) {
		/*
		Returns the blue LED values as set by :func:`Set Blue`.
		*/
		this.ipcon.sendRequest(this, BrickletRGBLEDMatrix.FUNCTION_GET_BLUE, [], '', 'B64', returnCallback, errorCallback, false);
	};
	this.setFrameDuration = function(frameDuration, returnCallback, errorCallback) {
		/*
		Sets the frame duration in ms.
		
		Example: If you want to achieve 20 frames per second, you should
		set the frame duration to 50ms (50ms * 20 = 1 second).
		
		Set this value to 0 to turn the automatic frame write mechanism off.
		
		Approach:
		
		* Call :func:`Set Frame Duration` with value > 0.
		* Set LED values for first frame with :func:`Set Red`, :func:`Set Green`, :func:`Set Blue`.
		* Wait for :cb:`Frame Started` callback.
		* Set LED values for second frame with :func:`Set Red`, :func:`Set Green`, :func:`Set Blue`.
		* Wait for :cb:`Frame Started` callback.
		* and so on.
		
		For frame duration of 0 see :func:`Draw Frame`.
		
		Default value: 0 = off.
		*/
		this.ipcon.sendRequest(this, BrickletRGBLEDMatrix.FUNCTION_SET_FRAME_DURATION, [frameDuration], 'H', '', returnCallback, errorCallback, false);
	};
	this.getFrameDuration = function(returnCallback, errorCallback) {
		/*
		Returns the frame duration in ms as set by :func:`Set Frame Duration`.
		*/
		this.ipcon.sendRequest(this, BrickletRGBLEDMatrix.FUNCTION_GET_FRAME_DURATION, [], '', 'H', returnCallback, errorCallback, false);
	};
	this.drawFrame = function(returnCallback, errorCallback) {
		/*
		If you set the frame duration to 0 (see :func:`Set Frame Duration`), you can use this
		function to transfer the frame to the matrix.
		
		Approach:
		
		* Call :func:`Set Frame Duration` with 0.
		* Set LED values for first frame with :func:`Set Red`, :func:`Set Green`, :func:`Set Blue`.
		* Call :func:`Draw Frame`.
		* Wait for :cb:`Frame Started` callback.
		* Set LED values for second frame with :func:`Set Red`, :func:`Set Green`, :func:`Set Blue`.
		* Call :func:`Draw Frame`.
		* Wait for :cb:`Frame Started` callback.
		* and so on.
		*/
		this.ipcon.sendRequest(this, BrickletRGBLEDMatrix.FUNCTION_DRAW_FRAME, [], '', '', returnCallback, errorCallback, false);
	};
	this.getSupplyVoltage = function(returnCallback, errorCallback) {
		/*
		Returns the current supply voltage of the Bricklet. The voltage is given in mV.
		*/
		this.ipcon.sendRequest(this, BrickletRGBLEDMatrix.FUNCTION_GET_SUPPLY_VOLTAGE, [], '', 'H', returnCallback, errorCallback, false);
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
		this.ipcon.sendRequest(this, BrickletRGBLEDMatrix.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 'I I I I', returnCallback, errorCallback, false);
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
		this.ipcon.sendRequest(this, BrickletRGBLEDMatrix.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 'B', returnCallback, errorCallback, false);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletRGBLEDMatrix.FUNCTION_GET_BOOTLOADER_MODE, [], '', 'B', returnCallback, errorCallback, false);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletRGBLEDMatrix.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', '', returnCallback, errorCallback, false);
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
		this.ipcon.sendRequest(this, BrickletRGBLEDMatrix.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 'B', returnCallback, errorCallback, false);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletRGBLEDMatrix.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', '', returnCallback, errorCallback, false);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletRGBLEDMatrix.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 'B', returnCallback, errorCallback, false);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature in °C as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletRGBLEDMatrix.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 'h', returnCallback, errorCallback, false);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletRGBLEDMatrix.FUNCTION_RESET, [], '', '', returnCallback, errorCallback, false);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletRGBLEDMatrix.FUNCTION_WRITE_UID, [uid], 'I', '', returnCallback, errorCallback, false);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletRGBLEDMatrix.FUNCTION_READ_UID, [], '', 'I', returnCallback, errorCallback, false);
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
		this.ipcon.sendRequest(this, BrickletRGBLEDMatrix.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback, false);
	};
}

module.exports = BrickletRGBLEDMatrix;
