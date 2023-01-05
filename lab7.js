angular.module("Packages",[]) //This is a module named as packages as under this module only everything will work and its also a view from MVC(model view controller)
.filter("namefilter",function()
{
    return function(input,option)
    {
        if(isNaN(option) ||(option == ""))
        {
            return input;
        }
        else
        {
        return input.substring(0,option).toUpperCase();
    }}
})
.controller("Packagesctrl",function($scope) //This works as a controller
{
    var items = [
        {name:'Kakapo',doa:new Date("January 31 2022"),location:"New Zealand",species:" Strigopoidea",genus:"Strigops"},
        {name:'Red Panda',doa:new Date("March 01 2020"),location:"Arunachal Pradesh",species:" Ailurus fulgens fulgens ",genus:"Ailurus"},
        {name:'Wolf',doa:new Date("February 12 2012"),location:"North America",species:" Canis lupus",genus:"Canis"},
        {name:'Greta Indian Bustard',doa:new Date("January 1 2012"),location:"Rajasthan",species:"  A. nigriceps",genus:"Ardeotis"},
        {name:'Giant Panda',doa:new Date("April 31 2022"),location:"China",species:" Ursidae",genus:"Ailuropoda"},
       
        ];
    $scope.items = items;
    $scope.rowlimit = 5;
});