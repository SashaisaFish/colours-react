import React from "react";

interface SVGInterface {
	size?: number;
}

export const LetterA: React.FC<SVGInterface> = (props) => (
	<svg
		width={props.size ? props.size : 48}
		height={props.size ? props.size : 48}
		viewBox={"0 0 64 64"}
		xmlns="http://www.w3.org/2000/svg"
		aria-label="Analogous color"
		className="iconify iconify--emojione"
		{...props}
	>
		<path
			d="M 31.855469 2 C 15.343397 2.0795511 1.9998084 15.487737 2 32 C 2 48.568542 15.431458 62 32 62 C 48.568542 62 62 48.568542 62 32 C 62 15.431458 48.568542 2 32 2 C 31.95182 1.9998839 31.90365 1.9998839 31.855469 2 z M 32.478516 16.28125 C 37.893572 16.39074 42.438398 22.048371 45.480469 32.597656 C 46.199624 35.09154 46.939445 38.614352 47.125 40.425781 C 47.417121 43.277536 47.337096 43.812616 46.525391 44.40625 C 45.224472 45.357663 43.122095 45.2629 42.064453 44.205078 C 41.576767 43.717314 40.717295 41.774831 40.15625 39.890625 C 39.534058 37.801064 38.761622 36.26385 38.173828 35.949219 C 37.153578 35.403105 26.589619 35.225771 25.269531 35.732422 C 24.842139 35.896456 23.99266 37.555298 23.382812 39.417969 C 22.772964 41.280643 21.924477 43.204157 21.498047 43.693359 C 20.610115 44.712002 17.826829 44.881672 16.917969 43.972656 C 15.480681 42.535132 16.531678 36.764728 19.638672 29.035156 C 22.84865 21.049383 25.611757 17.760847 30.107422 16.576172 C 30.914728 16.363435 31.704936 16.265609 32.478516 16.28125 z M 32.320312 20.693359 C 30.07101 20.693359 26.001169 26.643948 25.974609 29.970703 L 25.962891 31.367188 L 32.060547 31.367188 L 38.158203 31.367188 L 38.158203 30.103516 C 38.158203 26.512278 34.549273 20.693359 32.320312 20.693359 z "
			style={{
				display: "inline",
				fill: "#fff",
				fillOpacity: 1,
				stroke: "#000",
				strokeWidth: 1,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeMiterlimit: 4,
				strokeDasharray: "none",
				strokeOpacity: 1,
			}}
		/>
	</svg>
);

export const LetterC: React.FC<SVGInterface> = (props) => (
	<svg
		width={props.size ? props.size : 48}
		height={props.size ? props.size : 48}
		viewBox={"0 0 64 64"}
		xmlns="http://www.w3.org/2000/svg"
		aria-label="Complementary color"
		className="iconify iconify--emojione"
		{...props}
	>
		<path
			d="M 31.855469 2 A 30 30 0 0 0 2 32 A 30 30 0 0 0 32 62 A 30 30 0 0 0 62 32 A 30 30 0 0 0 32 2 A 30 30 0 0 0 31.855469 2 z M 34.865234 14.005859 C 40.553972 13.914337 45.84949 15.985743 46.171875 19.310547 C 46.419459 21.863905 45.05568 22.589041 42.179688 21.431641 C 38.22961 19.841992 35.724771 19.498668 33.128906 20.189453 C 24.148961 22.579101 22.31187 37.534974 30.376953 42.587891 C 33.132181 44.314091 38.161134 44.027885 41.042969 41.980469 C 43.74665 40.059623 47.162495 40.29563 47.464844 42.423828 C 47.765873 44.542739 46.049257 46.802816 42.90625 48.425781 C 39.394153 50.239333 30.551625 50.693349 26.662109 49.259766 C 22.926586 47.882941 19.630493 44.928817 17.9375 41.439453 C 16.763779 39.020344 16.472643 37.363258 16.501953 33.261719 C 16.563631 24.632326 20.189143 18.685593 27.294922 15.556641 C 29.613673 14.535604 32.279445 14.04746 34.865234 14.005859 z "
			style={{
				display: "inline",
				fill: "#fff",
				fillOpacity: 1,
				stroke: "#000",
				strokeWidth: 1,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeMiterlimit: 4,
				strokeDasharray: "none",
				strokeOpacity: 1,
			}}
		/>
	</svg>
);

export const LeftArrow: React.FC<SVGInterface> = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 64 64"
		width={props.size ? props.size : 48}
		height={props.size ? props.size : 48}
		{...props}
	>
		<g
			style={{
				strokeWidth: 0.39704033,
				fill: "#fff",
				stroke: "#000",
				strokeOpacity: 1,
				strokeMiterlimit: 4,
				strokeDasharray: "none",
				fillOpacity: 1,
			}}
		>
			<g
				style={{
					strokeWidth: 0.39704033,
					fill: "#fff",
					stroke: "#000",
					strokeOpacity: 1,
					strokeMiterlimit: 4,
					strokeDasharray: "none",
					fillOpacity: 1,
				}}
			>
				<path
					style={{
						strokeWidth: 0.39704033,
						fill: "#fff",
						stroke: "#000",
						strokeOpacity: 1,
						strokeMiterlimit: 4,
						strokeDasharray: "none",
						fillOpacity: 1,
					}}
					d="M44.516 50.7c-2.2 6.6-1 13.3-1.4 20 0 .3.7.8 1.1.9 1 .3 1.8-.1 2.4-.6 2-1.9 2.9-4.1 3.1-6.4.6-5.5 1.4-11.1.8-16.6.1-.7.2-1.4.2-2.1.2-2.8.3-5.6.2-8.3 2 2.1 4 3.9 6.4 5.5 1 .7 2.3.8 3.5-.6 1.1-1.2 1.3-2.6.6-3.7-1.3-1.8-2.6-3.6-4.2-5.2-2.6-2.5-5.4-4.7-8.1-7.1-.5-1.1-1.8-1.5-2.9-1l-1.1.6c-5.9 3-9.5 8.4-14.3 12.5-.2.2-.1 1 .2 1.4.5.9 1.3 1.2 2.1 1.2 2.7.2 4.9-.8 6.6-2.2 1.4-1.2 2.9-2.3 4.3-3.4-.2 1.3-.3 2.6-.3 3.9.1 3.8.5 7.5.8 11.2z"
					transform="matrix(0 -.6703 .66459 0 0 64.275)"
				/>
				<path
					style={{
						strokeWidth: 0.39704033,
						fill: "#fff",
						stroke: "#000",
						strokeOpacity: 1,
						strokeMiterlimit: 4,
						strokeDasharray: "none",
						fillOpacity: 1,
					}}
					d="M92.316 52.9c-1.7 6.3-4.6 12.6-8.9 18.3-.5.7-1.1 1.4-1.7 2.1l-.9 1-.4.5-.5.5-1.9 1.9-.5.5-.6.4-1.1.9c-1.3 1.2-2.9 2.2-4.4 3.3-.7.5-1.6.9-2.4 1.4-.8.4-1.6 1-2.4 1.3-3.9 2-8.2 3.2-12.6 3.9-1.1.1-2.2.4-3.3.4l-1.6.1H47.616l-3.4-.2-.9-.1c-.3 0-.5-.1-.8-.1l-1.6-.3-1.6-.3c-.5-.1-1.1-.3-1.6-.4l-1.6-.4c-.5-.1-1.1-.3-1.6-.5l-3-1.2c-1-.5-2-1-2.9-1.4-3.8-2.1-7.3-4.7-10.4-7.8-3-3.1-5.5-6.8-7.4-10.6l-.7-1.5-.4-.7-.3-.8-1.1-3.1-.8-3.1c-.1-.3-.1-.5-.2-.8l-.1-.8-.2-1.6-.3-1.6-.1-1.6-.1-1.6v-1.5l.2-3.5c.1-1.1.3-2.1.4-3.1.7-4.2 2.1-8.4 4.1-12.3 2.2-3.7 4.9-7.1 8-10.1 9.9-9.4 24.6-13.2 37.8-9.8l2.5.6 2.4.9 1.2.4c.4.2.8.4 1.2.5l2.3 1.1c2.9 1.7 5.8 3.5 8.3 5.8 1.3 1.1 2.4 2.4 3.6 3.6.6.6 1.1 1.3 1.6 2s1.1 1.3 1.5 2c.9 1.4 1.9 2.8 2.6 4.4.4.8.8 1.5 1.2 2.3l.9 2.4c2.9 7.2 3.3 14 5.2 13.4.8-.3 1.4-1.9 1.8-4.7 0-1.4 0-3-.1-4.9-.2-.9-.3-1.9-.5-2.9-.1-.5-.2-1-.4-1.6-.2-.5-.4-1.1-.5-1.6-1.2-3.9-3.2-7.6-5.4-11.1-1.2-1.7-2.3-3.4-3.8-4.9l-1-1.2c-.3-.4-.7-.8-1.1-1.1l-2.3-2.1c-3.2-2.7-6.6-5.1-10.4-6.9-1.8-1-3.8-1.6-5.8-2.4-1-.4-2-.5-3-.8-1-.3-2-.6-3.1-.7l-2.6-.4-1.3-.2-.9-.4-2.3-.1h-1.4l-1.2.1c-1.7.1-3.4.1-5 .4-1.7.3-3.3.5-4.9 1-6.5 1.6-12.6 4.6-17.9 8.8-5.2 4.2-9.6 9.4-12.6 15.3l-1.1 2.2c-.3.8-.7 1.5-1 2.3l-.7 2.4-.4 1.2-.3 1.2-.6 2.4-.3 1.2-.2 1.3c-.2 1.7-.5 3.4-.5 4.9-.7 5.8-.2 12 1.5 17.8 1.7 5.8 4.5 11.3 8.4 16.1 3.8 4.8 8.6 8.8 14 11.8l4.2 2c1.4.6 2.9 1.1 4.3 1.6l4.5 1.2c1.5.3 3.2.5 4.7.8l.6.1h.5l1.1.1 2.1.1H47.916l1.2-.1 2.3-.1 1.2-.1c.4 0 .8-.1 1.2-.2l2.3-.4c1.5-.2 3-.6 4.5-1 6-1.6 11.6-4.5 16.5-8.2 4.9-3.8 9.1-8.4 12.2-13.7.4-.7.8-1.3 1.2-2l1-2.1c.3-.7.7-1.4 1-2.1l.8-2.2c.3-.7.5-1.4.8-2.2l.6-2.2.6-2.2.4-2.4c.5-2.4-.2-5.5-.6-6.5-1.1-2-1.9.5-2.8 4.3z"
					transform="matrix(0 -.6703 .66459 0 0 64.275)"
				/>
			</g>
		</g>
	</svg>
);

export const RightArrow: React.FC<SVGInterface> = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 64 64"
		width={props.size ? props.size : 48}
		height={props.size ? props.size : 48}
		{...props}
	>
		<g
			style={{
				fill: "#fff",
				fillOpacity: 1,
				stroke: "#000",
				strokeWidth: 0.39704,
				strokeMiterlimit: 4,
				strokeDasharray: "none",
				strokeOpacity: 1,
			}}
		>
			<g
				style={{
					fill: "#fff",
					fillOpacity: 1,
					stroke: "#000",
					strokeWidth: 0.39704,
					strokeMiterlimit: 4,
					strokeDasharray: "none",
					strokeOpacity: 1,
				}}
			>
				<path
					style={{
						fill: "#fff",
						fillOpacity: 1,
						stroke: "#000",
						strokeWidth: 0.39704,
						strokeMiterlimit: 4,
						strokeDasharray: "none",
						strokeOpacity: 1,
					}}
					d="M44.516 50.7c-2.2 6.6-1 13.3-1.4 20 0 .3.7.8 1.1.9 1 .3 1.8-.1 2.4-.6 2-1.9 2.9-4.1 3.1-6.4.6-5.5 1.4-11.1.8-16.6.1-.7.2-1.4.2-2.1.2-2.8.3-5.6.2-8.3 2 2.1 4 3.9 6.4 5.5 1 .7 2.3.8 3.5-.6 1.1-1.2 1.3-2.6.6-3.7-1.3-1.8-2.6-3.6-4.2-5.2-2.6-2.5-5.4-4.7-8.1-7.1-.5-1.1-1.8-1.5-2.9-1l-1.1.6c-5.9 3-9.5 8.4-14.3 12.5-.2.2-.1 1 .2 1.4.5.9 1.3 1.2 2.1 1.2 2.7.2 4.9-.8 6.6-2.2 1.4-1.2 2.9-2.3 4.3-3.4-.2 1.3-.3 2.6-.3 3.9.1 3.8.5 7.5.8 11.2z"
					transform="matrix(0 -.6703 -.66459 0 64 64.275)"
				/>
				<path
					style={{
						fill: "#fff",
						fillOpacity: 1,
						stroke: "#000",
						strokeWidth: 0.39704,
						strokeMiterlimit: 4,
						strokeDasharray: "none",
						strokeOpacity: 1,
					}}
					d="M92.316 52.9c-1.7 6.3-4.6 12.6-8.9 18.3-.5.7-1.1 1.4-1.7 2.1l-.9 1-.4.5-.5.5-1.9 1.9-.5.5-.6.4-1.1.9c-1.3 1.2-2.9 2.2-4.4 3.3-.7.5-1.6.9-2.4 1.4-.8.4-1.6 1-2.4 1.3-3.9 2-8.2 3.2-12.6 3.9-1.1.1-2.2.4-3.3.4l-1.6.1H47.616l-3.4-.2-.9-.1c-.3 0-.5-.1-.8-.1l-1.6-.3-1.6-.3c-.5-.1-1.1-.3-1.6-.4l-1.6-.4c-.5-.1-1.1-.3-1.6-.5l-3-1.2c-1-.5-2-1-2.9-1.4-3.8-2.1-7.3-4.7-10.4-7.8-3-3.1-5.5-6.8-7.4-10.6l-.7-1.5-.4-.7-.3-.8-1.1-3.1-.8-3.1c-.1-.3-.1-.5-.2-.8l-.1-.8-.2-1.6-.3-1.6-.1-1.6-.1-1.6v-1.5l.2-3.5c.1-1.1.3-2.1.4-3.1.7-4.2 2.1-8.4 4.1-12.3 2.2-3.7 4.9-7.1 8-10.1 9.9-9.4 24.6-13.2 37.8-9.8l2.5.6 2.4.9 1.2.4c.4.2.8.4 1.2.5l2.3 1.1c2.9 1.7 5.8 3.5 8.3 5.8 1.3 1.1 2.4 2.4 3.6 3.6.6.6 1.1 1.3 1.6 2s1.1 1.3 1.5 2c.9 1.4 1.9 2.8 2.6 4.4.4.8.8 1.5 1.2 2.3l.9 2.4c2.9 7.2 3.3 14 5.2 13.4.8-.3 1.4-1.9 1.8-4.7 0-1.4 0-3-.1-4.9-.2-.9-.3-1.9-.5-2.9-.1-.5-.2-1-.4-1.6-.2-.5-.4-1.1-.5-1.6-1.2-3.9-3.2-7.6-5.4-11.1-1.2-1.7-2.3-3.4-3.8-4.9l-1-1.2c-.3-.4-.7-.8-1.1-1.1l-2.3-2.1c-3.2-2.7-6.6-5.1-10.4-6.9-1.8-1-3.8-1.6-5.8-2.4-1-.4-2-.5-3-.8-1-.3-2-.6-3.1-.7l-2.6-.4-1.3-.2-.9-.4-2.3-.1h-1.4l-1.2.1c-1.7.1-3.4.1-5 .4-1.7.3-3.3.5-4.9 1-6.5 1.6-12.6 4.6-17.9 8.8-5.2 4.2-9.6 9.4-12.6 15.3l-1.1 2.2c-.3.8-.7 1.5-1 2.3l-.7 2.4-.4 1.2-.3 1.2-.6 2.4-.3 1.2-.2 1.3c-.2 1.7-.5 3.4-.5 4.9-.7 5.8-.2 12 1.5 17.8 1.7 5.8 4.5 11.3 8.4 16.1 3.8 4.8 8.6 8.8 14 11.8l4.2 2c1.4.6 2.9 1.1 4.3 1.6l4.5 1.2c1.5.3 3.2.5 4.7.8l.6.1h.5l1.1.1 2.1.1H47.916l1.2-.1 2.3-.1 1.2-.1c.4 0 .8-.1 1.2-.2l2.3-.4c1.5-.2 3-.6 4.5-1 6-1.6 11.6-4.5 16.5-8.2 4.9-3.8 9.1-8.4 12.2-13.7.4-.7.8-1.3 1.2-2l1-2.1c.3-.7.7-1.4 1-2.1l.8-2.2c.3-.7.5-1.4.8-2.2l.6-2.2.6-2.2.4-2.4c.5-2.4-.2-5.5-.6-6.5-1.1-2-1.9.5-2.8 4.3z"
					transform="matrix(0 -.6703 -.66459 0 64 64.275)"
				/>
			</g>
		</g>
	</svg>
);
