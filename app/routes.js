const express = require('express')
const router = express.Router()
const path = require("path")

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Add your routes here - above the module.exports line


// /////////////////////////
// Check Development Plan V1
// /////////////////////////

// CAD data routing

router.get('/check-my-plans/initial-check/v1/03-upload-cad', function (req, res) {
  // get the answer from the query string (eg. ?hasCAD=false)
  var hasCAD = req.query.hasCAD

  if (hasCAD === 'false') {
    // redirect to the relevant page
    res.redirect('/check-my-plans/initial-check/v1/03b-no-cad')
  } else {
    // if hasCAD is any other value (or is missing) render the page requested
    res.render('check-my-plans/initial-check/v1/03-upload-cad')
  }
})

// Precedednt deeds data routing

router.get('/check-my-plans/initial-check/v1/05-upload-deeds', function (req, res) {
  // get the answer from the query string (eg. ?hasCAD=false)
  var hasDeeds = req.query.hasDeeds

  if (hasDeeds === 'false') {
    // redirect to the relevant page
    res.redirect('/check-my-plans/initial-check/v1/05-no-deeds')
  } else {
    // if hasDeeds is any other value (or is missing) render the page requested
    res.render('check-my-plans/initial-check/v1/05-upload-deeds')
  }
})


// Precedednt deeds data routing

router.get('/check-my-plans/initial-check/v1/09-conveyancer', function (req, res) {
  // get the answer from the query string (eg. ?hasCAD=false)
  var hasConv = req.query.hasConv

  if (hasConv === 'false') {
    // redirect to the relevant page
    res.redirect('/check-my-plans/initial-check/v1/10-check-answers')
  } else {
    // if hasConv is any other value (or is missing) render the page requested
    res.render('check-my-plans/initial-check/v1/09-conveyancer')
  }
})


// /////////////////////////////////
// Check Revised Development Plan V1
// /////////////////////////////////

// Revised plans or new plans - routing

router.get('/check-my-plans/update-check/v1/03-get-my-plans', function (req, res) {
  // get the answer from the query string (eg. ?hasCAD=false)
  var RevisedPlans = req.query.RevisedPlans

  if (RevisedPlans === 'false') {
    // redirect to initial plans check flow
    res.redirect('/check-my-plans/initial-check/v1/02-digital-layout')
  } else {
    // if RevisedPlans is any other value (or is missing) render the page requested
    res.render('check-my-plans/update-check/v1/03-get-my-plans')
  }
})


// set-up default data for submitted development

router.get('/check-my-plans/update-check/v1/03b-setup-information', function (req, res) {
  // set up default data for submitted development

  req.session.data['estate-name'] = "Westway Estate Phase 2";
  req.session.data['estate-address-1'] = "North Plymouth";
  req.session.data['estate-address-2'] = "PL1 2HB";
  req.session.data['cad_uploads'] = "westway-estate.dxf";
  req.session.data['deed_uploads'] = "westway-new-title-deeds.pdf";
  req.session.data['email'] = "graham.thomas@sandersonshomes.co.uk"
  req.session.data['dev-name'] = "Sanderson Homes";
  req.session.data['dev-address-1'] = "Alston Towers";
  req.session.data['dev-address-2'] = "North Alerton";
  req.session.data['dev-address-3'] = "Derby";
  req.session.data['dev-address-4'] = "DB1 3NB";
  req.session.data['conv-name'] = "Barrow & Co Solicitors";
  req.session.data['conv-address-1'] = "23 Hyde Park";
  req.session.data['conv-address-2'] = "Plymouth";
  req.session.data['conv-address-3'] = "PL3 2ED";

  // redirect to see your saved information for your development page
  res.redirect('/check-my-plans/update-check/v1/04-development-info')

})


// /////////////////////////
// Check Development Plan V10
// /////////////////////////

// CAD data routing

router.get('/check-my-plans/initial-check/v10/03-upload-cad', function (req, res) {
  // get the answer from the query string (eg. ?hasCAD=false)
  var hasCAD = req.query.hasCAD

  if (hasCAD === 'false') {
    // redirect to the relevant page
    res.redirect('/check-my-plans/initial-check/v10/03b-no-cad')
  } else {
    // if hasCAD is any other value (or is missing) render the page requested
    res.render('check-my-plans/initial-check/v10/03-upload-cad')
  }
})

// Precedednt deeds data routing

router.get('/check-my-plans/initial-check/v10/05-upload-deeds', function (req, res) {
  // get the answer from the query string (eg. ?hasCAD=false)
  var hasDeeds = req.query.hasDeeds

  if (hasDeeds === 'false') {
    // redirect to the relevant page
    res.redirect('/check-my-plans/initial-check/v10/05-no-deeds')
  } else {
    // if hasDeeds is any other value (or is missing) render the page requested
    res.render('check-my-plans/initial-check/v10/05-upload-deeds')
  }
})


// Precedednt deeds data routing

router.get('/check-my-plans/initial-check/v10/09-conveyancer', function (req, res) {
  // get the answer from the query string (eg. ?hasCAD=false)
  var hasConv = req.query.hasConv

  if (hasConv === 'false') {
    // redirect to the relevant page
    res.redirect('/check-my-plans/initial-check/v10/10-check-answers')
  } else {
    // if hasConv is any other value (or is missing) render the page requested
    res.render('check-my-plans/initial-check/v10/09-conveyancer')
  }
})


// /////////////////////////////////
// Check Revised Development Plan V10
// /////////////////////////////////

// Revised plans or new plans - routing

router.get('/check-my-plans/update-check/v10/03-get-my-plans', function (req, res) {
  // get the answer from the query string (eg. ?hasCAD=false)
  var RevisedPlans = req.query.RevisedPlans

  if (RevisedPlans === 'false') {
    // redirect to initial plans check flow
    res.redirect('/check-my-plans/initial-check/v10/02-digital-layout')
  } else {
    // if RevisedPlans is any other value (or is missing) render the page requested
    res.render('check-my-plans/update-check/v10/03-get-my-plans')
  }
})


// set-up default data for submitted development

router.get('/check-my-plans/update-check/v10/03b-setup-information', function (req, res) {
  // set up default data for submitted development

  req.session.data['estate-name'] = "Westway Estate Phase 2";
  req.session.data['estate-address-1'] = "North Plymouth";
  req.session.data['estate-address-2'] = "PL1 2HB";
  req.session.data['cad_uploads'] = "westway-estate.dxf";
  req.session.data['deed_uploads'] = "westway-new-title-deeds.pdf";
  req.session.data['email'] = "graham.thomas@sandersonshomes.co.uk"
  req.session.data['dev-name'] = "Sanderson Homes";
  req.session.data['dev-address-1'] = "Alston Towers";
  req.session.data['dev-address-2'] = "North Alerton";
  req.session.data['dev-address-3'] = "Derby";
  req.session.data['dev-address-4'] = "DB1 3NB";
  req.session.data['conv-name'] = "Barrow & Co Solicitors";
  req.session.data['conv-address-1'] = "23 Hyde Park";
  req.session.data['conv-address-2'] = "Plymouth";
  req.session.data['conv-address-3'] = "PL3 2ED";

  // redirect to see your saved information for your development page
  res.redirect('/check-my-plans/update-check/v10/04-development-info')

})


// ////// 01 //////////////////
// pre puplic beta - likely MVP
// estate page and pdf
// ////////////////////////////
router.get('/housing-developments/westway', function (req, res) {
    res.render('pb/01/estate')
})

router.get('/housing-developments/westway/estate-layout', function (req, res) {
    res.sendFile(path.resolve('public/images/westway.pdf'))
})


// ///// 02 //////////////////
// pre puplic beta - likely MVP
// estates list
// ////////////////////////////
router.get('/02/housing-developments/westway', function (req, res) {
    res.render('pb/02/estate')
})

router.get('/02/housing-developments', function (req, res) {
    res.render('pb/02/estate-list')
})

router.get('/02/housing-developments/westway/estate-layout', function (req, res) {
    res.sendFile(path.resolve('public/images/westway.pdf'))
})

// ///// 03 ///////////////////////////////////////////////
// private beta first release - user story 11 - estate page
// ////////////////////////////////////////////////////////
router.get('/03/housing-developments/germanybeck', function (req, res) {
    res.render('pb/03/estate-mvp')
})

router.get('/germanybeck/estate-layout', function (req, res) {
    res.sendFile(path.resolve('public/images/gb-estate-layout-rev-a.pdf'))
})


// ////////////////////////////////////////////////////////
// ///// version 08 ///////////////////////////////////////
// ////////////////////////////////////////////////////////


// ///////// 2 plans one estate /////////////////////

router.get('/thurstan-park/estate-layout-ep1', function (req, res) {
    res.sendFile(path.resolve('public/images/v0.2_thurstan_park_northallerton-ep1.pdf'))
})

router.get('/thurstan-park/estate-layout-ep2', function (req, res) {
    res.sendFile(path.resolve('public/images/v0.5_taylor_wimpey_north_all_ep2_plan_2.10.18.pdf'))
})

// //////// email notifications /////////////////

router.get('/thurstan-park/plan-changed-noification', function (req, res) {
    res.sendFile(path.resolve('public/images/Thurstan-Park-plot-changes-large-development.pdf'))
})

// ////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////


// ////////////////////////////////////////////////////////
// ///// version 09 ///////////////////////////////////////
// ////////////////////////////////////////////////////////


// ///////// 1 plan for the estate /////////////////////

router.get('/thurstan-park/estate-layout', function (req, res) {
    res.sendFile(path.resolve('public/images/hmlr-thurstan-park.pdf'))
})

router.get('/thurstan-park/plan-published-noification', function (req, res) {
    res.sendFile(path.resolve('public/images/Thurstan-Park-plan-approved-large-development.pdf'))
})


router.get('/harlow-hill-grange/estate-layout', function (req, res) {
    res.sendFile(path.resolve('public/images/harlow-hill-grange-v1.pdf'))
})

// ///// version 15//////


router.get('/thurstan-park/estate-layout-plot-08', function (req, res) {
    res.sendFile(path.resolve('public/images/TP-plan---border-on-plot-8---no-stamp.jpg'))
})

router.get('/thurstan-park-no-stamp', function (req, res) {
    res.sendFile(path.resolve('public/images/thurstan-park-no-stamp.jpg'))
})

// ////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////


// ////////////////////////////////////////////////////////////////////////
// ////   Version 16 - April 2020 Proposition - for March 2019 board //////
// Check Development Plan V16
// ////////////////////////////////////////////////////////////////////////

// plan for a new development, or a plan for an existing development?
// when posting to firsttime-returning-routing

router.get('/pb/16/submit-plans/firsttime-returning-routing', function (req, res) {
  // get the answer from the query string (eg. ?hasCAD=false)
  var RevisedPlans = req.query.RevisedPlans

  if (RevisedPlans === 'true') {
    // redirect to initial plans check flow
    res.redirect('/pb/16/submit-plans/update-check/03-get-my-plans')
  } else {
    // if RevisedPlans is any other value (or is missing) render the page requested
    res.render('pb/16/submit-plans/initial-check/01-development')
  }
})

// CAD data routing

router.get('/pb/16/submit-plans/initial-check/03-do-you-have-cad', function (req, res) {
  // get the answer from the query string (eg. ?hasCAD=false)
  var hasCAD = req.query.hasCAD

  if (hasCAD === 'false') {
    // redirect to the relevant page
    res.redirect('/pb/16/submit-plans/initial-check/03b-upload-pdf')
  } else {
    // if hasCAD is any other value (or is missing) render the page requested
    res.render('pb/16/submit-plans/initial-check/03-upload-cad')
  }
})

// wip below //



// set-up default data for submitted development

router.get('/pb/16/submit-plans/update-check/retrieve-development', function (req, res) {
  // set up default data for submitted development

  req.session.data['development-name'] = "Westway Estate Phase 2";
  req.session.data['development-address-1'] = "North Plymouth";
  req.session.data['development-address-2'] = "PL1 2HB";
  req.session.data['cad_uploads'] = "westway-estate-cad-v1.dxf";
  req.session.data['pdf_uploads'] = "westway-estate-v1.pdf";
  req.session.data['email'] = "graham.thomas@sandersonshomes.co.uk"
  req.session.data['dev-name'] = "Sanderson Homes";

  // redirect to see your saved information for your development page
  res.redirect('/pb/16/submit-plans/update-check/04-development-info')

})

// ////////////////////////////////////////////////////////////////////////
// // END - Version 16 - April 2020 Proposition - for March 2019 board ////
// Check Development Plan V16
// ////////////////////////////////////////////////////////////////////////


module.exports = router
