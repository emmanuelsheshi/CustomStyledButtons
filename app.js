import { Button } from "./components/Button.js";
import { RenderToClass,RenderToElement,RenderToId } from "./components/Render.js";


let BtnFire =    new Button("","orange","icons/icon.svg",120,80,6,"btn-toggle",true,20).create()
let BtnOk =      new Button("","grey","icons/icon.svg",120,80,6,"btn-ok",true,100).create()
let BtnWeather = new Button("","purple","icons/cloud-snow.svg",100,50,20,"btn-weather",false,10).create()


RenderToElement("body",BtnOk) 
RenderToClass("buttonContainerClass",BtnFire) // class name where you want your button to be contained
RenderToId("buttonContainerID",BtnWeather)
















