import { Networking } from "@flamework/networking";

interface ClientToServerEvents {
	changeColor: () => void;
}

interface ServerToClientEvents {
	changeColor: () => void;
}

interface ClientToServerFunctions {
	changeColor: () => void;
}

interface ServerToClientFunctions {
	changeColor: () => void;
}

export const GlobalEvents = Networking.createEvent<ClientToServerEvents, ServerToClientEvents>();
export const GlobalFunctions = Networking.createFunction<ClientToServerFunctions, ServerToClientFunctions>();
