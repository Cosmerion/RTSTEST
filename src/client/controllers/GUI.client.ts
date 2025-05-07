import { Players } from "@rbxts/services";
import { Events } from "client/network";
import { GlobalEvents } from "shared/network";

const player = Players.LocalPlayer;
const screenGui = new Instance("ScreenGui");
screenGui.Name = "MyGui";
screenGui.Parent = player.WaitForChild("PlayerGui");

const button = new Instance("TextButton");
button.Size = new UDim2(0, 200, 0, 50);
button.Position = new UDim2(0.5, -100, 0.5, -25);
button.Text = "Click Me!";
button.Parent = screenGui;

button.MouseButton1Click.Connect(() => {
	Events.changeColor.fire();
});
