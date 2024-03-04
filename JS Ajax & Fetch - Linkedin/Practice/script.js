"use strict";

// const url = 'https://api.zippopotam.us/us/10001';

const url = "https://api.zippopotam.us/us/";

// const url = 'https://developer.nps.gov/api/v1/parks?stateCode=ca&api_key=8rmHHFfk89QSE1EOkyvJW7LomdfUZeI21ikSyUGE'

// const url = 'https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=8rmHHFfk89QSE1EOkyvJW7LomdfUZeI21ikSyUGE';

const postCodeField = document.querySelector("#post");
const countryField = document.querySelector("#country");
const countryAbbreviationField = document.querySelector(
  "#country_abbreviation"
);
const placeNameField = document.querySelector("#place_name");
const longitudeField = document.querySelector("#longitude");
const stateField = document.querySelector("#state");
const stateAbbreviationField = document.querySelector("#state_abbreviation");
const latitudeField = document.querySelector("#latitude");

const updateUISuccess = function (data) {
  const parseData = JSON.parse(data);
  console.log(parseData);
  // let countryData = parseData.country
  // console.log(countryData)
  countryField.value = parseData.country;
  countryAbbreviationField.value = parseData["country abbreviation"];
  placeNameField.value = parseData.places[0]["place name"];
  longitudeField.value = parseData.places[0].longitude;
  stateField.value = parseData.places[0].state;
  stateAbbreviationField.value = parseData.places[0]["state abbreviation"];
  latitudeField.value = parseData.places[0].latitude;
};

const updateUIError = function (error) {
  console.log(error);
};

const responseMethod = function (httpRequest) {
  if (httpRequest.readyState === 4) {
    if (httpRequest.status === 200) {
      updateUISuccess(httpRequest.responseText);
    } else {
      updateUIError(httpRequest.status + ":" + httpRequest.responseText);
    }
  }
};

const createRequest = function (url) {
  const httpRequest = new XMLHttpRequest(url);
  httpRequest.addEventListener("readystatechange", () => {
    responseMethod(httpRequest);
  });
  httpRequest.open("GET", url);
  httpRequest.send();
};

const checkCompletion = function () {
  if (postCodeField.value !== "") {
    const requestUrl = url + postCodeField.value;
    createRequest(requestUrl);
  }
};

// createRequest(url);

postCodeField.addEventListener("blur", checkCompletion);
