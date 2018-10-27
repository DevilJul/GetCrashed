const Tinkerforge = require('./Tinkerforge.js');

curl -X POST https://api.twilio.com/2010-04-01/Accounts/AC29fa7c0cf2cbd883822eafe5d9126e2f/Messages.json \
    --data-urlencode "From=+14063845438" \
--data-urlencode "Body=Hallo bichachos" \
--data-urlencode "To=+491637118036" \
-u AC29fa7c0cf2cbd883822eafe5d9126e2f:1971b23e10efab3c13bd947f492a5c87