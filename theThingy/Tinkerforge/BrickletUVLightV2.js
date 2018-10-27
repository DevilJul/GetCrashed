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

BrickletUVLightV2.DEVICE_IDENTIFIER = 2118;
BrickletUVLightV2.DEVICE_DISPLAY_NAME = 'UV Light Bricklet 2.0';
BrickletUVLightV2.CALLBACK_UVA = 4;
BrickletUVLightV2.CALLBACK_UVB = 8;
BrickletUVLightV2.CALLBACK_UVI = 12;
BrickletUVLightV2.FUNCTION_GET_UVA = 1;
BrickletUVLightV2.FUNCTION_SET_UVA_CALLBACK_CONFIGURATION = 2;
BrickletUVLightV2.FUNCTION_GET_UVA_CALLBACK_CONFIGURATION = 3;
BrickletUVLightV2.FUNCTION_GET_UVB = 5;
BrickletUVLightV2.FUNCTION_SET_UVB_CALLBACK_CONFIGURATION = 6;
BrickletUVLightV2.FUNCTION_GET_UVB_CALLBACK_CONFIGURATION = 7;
BrickletUVLightV2.FUNCTION_GET_UVI = 9;
BrickletUVLightV2.FUNCTION_SET_UVI_CALLBACK_CONFIGURATION = 10;
BrickletUVLightV2.FUNCTION_GET_UVI_CALLBACK_CONFIGURATION = 11;
BrickletUVLightV2.FUNCTION_SET_CONFIGURATION = 13;
BrickletUVLightV2.FUNCTION_GET_CONFIGURATION = 14;
BrickletUVLightV2.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletUVLightV2.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletUVLightV2.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletUVLightV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletUVLightV2.FUNCTION_WRITE_FIRMWARE = 238;
BrickletUVLightV2.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletUVLightV2.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletUVLightV2.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletUVLightV2.FUNCTION_RESET = 243;
BrickletUVLightV2.FUNCTION_WRITE_UID = 248;
BrickletUVLightV2.FUNCTION_READ_UID = 249;
BrickletUVLightV2.FUNCTION_GET_IDENTITY = 255;
BrickletUVLightV2.THRESHOLD_OPTION_OFF = 'x';
BrickletUVLightV2.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletUVLightV2.THRESHOLD_OPTION_INSIDE = 'i';
BrickletUVLightV2.THRESHOLD_OPTION_SMALLER = '<';
BrickletUVLightV2.THRESHOLD_OPTION_GREATER = '>';
BrickletUVLightV2.INTEGRATION_TIME_50MS = 0;
BrickletUVLightV2.INTEGRATION_TIME_100MS = 1;
BrickletUVLightV2.INTEGRATION_TIME_200MS = 2;
BrickletUVLightV2.INTEGRATION_TIME_400MS = 3;
BrickletUVLightV2.INTEGRATION_TIME_800MS = 4;
BrickletUVLightV2.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletUVLightV2.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletUVLightV2.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletUVLightV2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletUVLightV2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletUVLightV2.BOOTLOADER_STATUS_OK = 0;
BrickletUVLightV2.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletUVLightV2.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletUVLightV2.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletUVLightV2.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletUVLightV2.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletUVLightV2.STATUS_LED_CONFIG_OFF = 0;
BrickletUVLightV2.STATUS_LED_CONFIG_ON = 1;
BrickletUVLightV2.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletUVLightV2.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletUVLightV2(uid, ipcon) {
	//Measures UV light

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon);
	BrickletUVLightV2.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletUVLightV2.FUNCTION_GET_UVA] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletUVLightV2.FUNCTION_SET_UVA_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletUVLightV2.FUNCTION_GET_UVA_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletUVLightV2.FUNCTION_GET_UVB] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletUVLightV2.FUNCTION_SET_UVB_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletUVLightV2.FUNCTION_GET_UVB_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletUVLightV2.FUNCTION_GET_UVI] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletUVLightV2.FUNCTION_SET_UVI_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletUVLightV2.FUNCTION_GET_UVI_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletUVLightV2.FUNCTION_SET_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletUVLightV2.FUNCTION_GET_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletUVLightV2.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletUVLightV2.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletUVLightV2.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletUVLightV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletUVLightV2.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletUVLightV2.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletUVLightV2.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletUVLightV2.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletUVLightV2.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletUVLightV2.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletUVLightV2.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletUVLightV2.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletUVLightV2.CALLBACK_UVA] = 'i';
	this.callbackFormats[BrickletUVLightV2.CALLBACK_UVB] = 'i';
	this.callbackFormats[BrickletUVLightV2.CALLBACK_UVI] = 'i';



	this.getUVA = function(returnCallback, errorCallback) {
		/*
		Returns the UVA intensity of the sensor, the intensity is given
		in 1/10 mW/m². The sensor has not weighted the intensity with the erythemal
		action spectrum to get the skin-affecting irradiation. Therefore, you cannot
		just divide the value by 250 to get the UVA index. To get the UV index use
		:func:`Get UVI`.
		
		If the sensor is saturated, then -1 is returned, see :func:`Set Configuration`.
		
		If you want to get the intensity periodically, it is recommended to use the
		:cb:`UVA` callback and set the period with
		:func:`Set UVA Callback Configuration`.
		
		
		If you want to get the value periodically, it is recommended to use the
		:cb:`UVA` callback. You can set the callback configuration
		with :func:`Set UVA Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletUVLightV2.FUNCTION_GET_UVA, [], '', 'i', returnCallback, errorCallback, false);
	};
	this.setUVACallbackConfiguration = function(period, valueHasToChange, option, min, max, returnCallback, errorCallback) {
		/*
		The period in ms is the period with which the :cb:`UVA` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change
		within the period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		
		It is furthermore possible to constrain the callback with thresholds.
		
		The `option`-parameter together with min/max sets a threshold for the :cb:`UVA` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Threshold is turned off"
		 "'o'",    "Threshold is triggered when the value is *outside* the min and max values"
		 "'i'",    "Threshold is triggered when the value is *inside* or equal to the min and max values"
		 "'<'",    "Threshold is triggered when the value is smaller than the min value (max is ignored)"
		 "'>'",    "Threshold is triggered when the value is greater than the min value (max is ignored)"
		
		If the option is set to 'x' (threshold turned off) the callback is triggered with the fixed period.
		
		The default value is (0, false, 'x', 0, 0).
		*/
		this.ipcon.sendRequest(this, BrickletUVLightV2.FUNCTION_SET_UVA_CALLBACK_CONFIGURATION, [period, valueHasToChange, option, min, max], 'I ? c i i', '', returnCallback, errorCallback, false);
	};
	this.getUVACallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by :func:`Set UVA Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletUVLightV2.FUNCTION_GET_UVA_CALLBACK_CONFIGURATION, [], '', 'I ? c i i', returnCallback, errorCallback, false);
	};
	this.getUVB = function(returnCallback, errorCallback) {
		/*
		Returns the UVB intensity of the sensor, the intensity is given
		in 1/10 mW/m². The sensor has not weighted the intensity with the erythemal
		action spectrum to get the skin-affecting irradiation. Therefore, you cannot
		just divide the value by 250 to get the UVB index. To get the UV index use
		:func:`Get UVI`.
		
		If the sensor is saturated, then -1 is returned, see :func:`Set Configuration`.
		
		If you want to get the intensity periodically, it is recommended to use the
		:cb:`UVB` callback and set the period with
		:func:`Set UVB Callback Configuration`.
		
		
		If you want to get the value periodically, it is recommended to use the
		:cb:`UVB` callback. You can set the callback configuration
		with :func:`Set UVB Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletUVLightV2.FUNCTION_GET_UVB, [], '', 'i', returnCallback, errorCallback, false);
	};
	this.setUVBCallbackConfiguration = function(period, valueHasToChange, option, min, max, returnCallback, errorCallback) {
		/*
		The period in ms is the period with which the :cb:`UVB` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change
		within the period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		
		It is furthermore possible to constrain the callback with thresholds.
		
		The `option`-parameter together with min/max sets a threshold for the :cb:`UVB` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Threshold is turned off"
		 "'o'",    "Threshold is triggered when the value is *outside* the min and max values"
		 "'i'",    "Threshold is triggered when the value is *inside* or equal to the min and max values"
		 "'<'",    "Threshold is triggered when the value is smaller than the min value (max is ignored)"
		 "'>'",    "Threshold is triggered when the value is greater than the min value (max is ignored)"
		
		If the option is set to 'x' (threshold turned off) the callback is triggered with the fixed period.
		
		The default value is (0, false, 'x', 0, 0).
		*/
		this.ipcon.sendRequest(this, BrickletUVLightV2.FUNCTION_SET_UVB_CALLBACK_CONFIGURATION, [period, valueHasToChange, option, min, max], 'I ? c i i', '', returnCallback, errorCallback, false);
	};
	this.getUVBCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by :func:`Set UVB Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletUVLightV2.FUNCTION_GET_UVB_CALLBACK_CONFIGURATION, [], '', 'I ? c i i', returnCallback, errorCallback, false);
	};
	this.getUVI = function(returnCallback, errorCallback) {
		/*
		Returns the UV index of the sensor, the index is given in 1/10.
		
		If the sensor is saturated, then -1 is returned, see :func:`Set Configuration`.
		
		If you want to get the intensity periodically, it is recommended to use the
		:cb:`UVI` callback and set the period with
		:func:`Set UVI Callback Configuration`.
		
		
		If you want to get the value periodically, it is recommended to use the
		:cb:`UVI` callback. You can set the callback configuration
		with :func:`Set UVI Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletUVLightV2.FUNCTION_GET_UVI, [], '', 'i', returnCallback, errorCallback, false);
	};
	this.setUVICallbackConfiguration = function(period, valueHasToChange, option, min, max, returnCallback, errorCallback) {
		/*
		The period in ms is the period with which the :cb:`UVI` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change
		within the period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		
		It is furthermore possible to constrain the callback with thresholds.
		
		The `option`-parameter together with min/max sets a threshold for the :cb:`UVI` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Threshold is turned off"
		 "'o'",    "Threshold is triggered when the value is *outside* the min and max values"
		 "'i'",    "Threshold is triggered when the value is *inside* or equal to the min and max values"
		 "'<'",    "Threshold is triggered when the value is smaller than the min value (max is ignored)"
		 "'>'",    "Threshold is triggered when the value is greater than the min value (max is ignored)"
		
		If the option is set to 'x' (threshold turned off) the callback is triggered with the fixed period.
		
		The default value is (0, false, 'x', 0, 0).
		*/
		this.ipcon.sendRequest(this, BrickletUVLightV2.FUNCTION_SET_UVI_CALLBACK_CONFIGURATION, [period, valueHasToChange, option, min, max], 'I ? c i i', '', returnCallback, errorCallback, false);
	};
	this.getUVICallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by :func:`Set UVI Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletUVLightV2.FUNCTION_GET_UVI_CALLBACK_CONFIGURATION, [], '', 'I ? c i i', returnCallback, errorCallback, false);
	};
	this.setConfiguration = function(integrationTime, returnCallback, errorCallback) {
		/*
		Sets the configuration of the sensor. The integration time can be configured
		between 50 and 800 ms. With a shorter integration time the sensor reading updates
		more often but contains more noise. With a longer integration the sensor reading
		contains less noise but updates less often.
		
		With a longer integration time (especially 800 ms) and a higher UV intensity the
		sensor can be saturated. If this happens the UVA/UVB/UVI readings are all -1.
		In this case you need to choose a shorter integration time.
		
		Default value: 400 ms.
		*/
		this.ipcon.sendRequest(this, BrickletUVLightV2.FUNCTION_SET_CONFIGURATION, [integrationTime], 'B', '', returnCallback, errorCallback, false);
	};
	this.getConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletUVLightV2.FUNCTION_GET_CONFIGURATION, [], '', 'B', returnCallback, errorCallback, false);
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
		this.ipcon.sendRequest(this, BrickletUVLightV2.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 'I I I I', returnCallback, errorCallback, false);
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
		this.ipcon.sendRequest(this, BrickletUVLightV2.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 'B', returnCallback, errorCallback, false);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletUVLightV2.FUNCTION_GET_BOOTLOADER_MODE, [], '', 'B', returnCallback, errorCallback, false);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletUVLightV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', '', returnCallback, errorCallback, false);
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
		this.ipcon.sendRequest(this, BrickletUVLightV2.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 'B', returnCallback, errorCallback, false);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletUVLightV2.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', '', returnCallback, errorCallback, false);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletUVLightV2.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 'B', returnCallback, errorCallback, false);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature in °C as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletUVLightV2.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 'h', returnCallback, errorCallback, false);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletUVLightV2.FUNCTION_RESET, [], '', '', returnCallback, errorCallback, false);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletUVLightV2.FUNCTION_WRITE_UID, [uid], 'I', '', returnCallback, errorCallback, false);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletUVLightV2.FUNCTION_READ_UID, [], '', 'I', returnCallback, errorCallback, false);
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
		this.ipcon.sendRequest(this, BrickletUVLightV2.FUNCTION_GET_IDENTITY, [], '', 's8 s8 c B3 B3 H', returnCallback, errorCallback, false);
	};
}

module.exports = BrickletUVLightV2;
