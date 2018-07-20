
function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

var ga_guid = generateUUID();

var exists = GOVUK.cookie('ga_user_id');
// alert(exists);


if (typeof(exists) != 'undefined' && exists != null)
{
  // do nothing
}
else
{
  var ga_guid = generateUUID();
  GOVUK.cookie('ga_user_id', ga_guid, { days: 120 });
}




