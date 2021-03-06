import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
	* {
		margin: 0;
  		padding: 0;
  		box-sizing: border-box;
		scroll-behavior: smooth;	
	}
	a {
		text-decoration:none;
		&:hover {
		text-decoration: 1px underline;
		text-underline-position: under;
	}
		margin-right: 0.5rem;
		color: #428cc5;
	}
	hr{
		border: 1px solid #efefef;
	}
	.title-font{
		font-family: "Noto Sans KR", sans-serif;
	}
	html,
	body,
	#root
	 {    
		font-family: "Noto Sans KR", sans-serif;
		min-width: 1100px;
  		height: 100%;
  		display: flex;
  		flex-direction: column;
	}
	.scrollbar{
		overflow: overlay;
		&::-webkit-scrollbar {
  		width: 12px;
 		}
  		&::-webkit-scrollbar-thumb {
			background-color: hsla(0, 0%, 42%, 0.49);
    		border-radius: 100px;
    		background: #ccc;
    		background-clip: padding-box;
    		border: 4px solid transparent;
  		}
	}	
	.tooltip{
		width: max-content;
		line-height: 1.5;
		height: fit-content;
		white-space:pre-line;
		padding:0.8rem;
		color:#454545;
		strong{
			font-weight: bold;
			color:#252525;
		}
	}
	.normal {
		font-weight: 400;
	}
	.bold {
		font-weight: 700;
	}
	h1,
	h2,
	h3,
	h4 {
		margin: 0;
		padding: 0;
	}
	h1 {		
		font-weight: bold;
	}
	h2 {		
		font-weight: bold;
	}
	h3 {		
		font-weight: bold;
	}
	h4 {		
		font-weight: bold;
	}

	.must:before {
		content: '*';
		color: #c91c1c;
	}
	.f-10 {
		font-size: 10px;
	}
	.f-12 {
		font-size: 12px;
	}
	.f-14 {
		font-size: 14px;
	}
	.f-16 {
		font-size: 16px;
	}
	.f-18 {
		font-size: 18px;
	}
	.f-20 {
		font-size: 20px;
	}
	.f-24 {
		font-size: 24px;
	}
	.f-30 {
		font-size: 30px;
	}
	.f-32 {
		font-size: 32px;
	}

	.col-1 {
		width: 72.5px;
	}
	.col-2 {
		width: 175px;
	}
	.col-3 {
		width: 277.5px;
	}
	.col-4 {
		width: 380px;
	}
	.col-5 {
		width: 482.5px;
	}
	.col-6 {
		width: 585px;
	}
	.col-7 {
		width: 687.5px;
	}
	.col-8 {
		width: 790px;
	}
	.col-9 {
		width: 892.5px;
	}
	.col-10 {
		width: 995px;
	}
	.col-11 {
		width: 1097.5px;
	}
	.col-12 {
		width: 1200px;
	}

	.w-full {
		width: 100%;
	}

	.mb-8 {
		margin-bottom: 8px;
	}
	.mb-16 {
		margin-bottom: 16px;
	}
	.mb-24 {
		margin-bottom: 24px;
	}
	.mb-32 {
		margin-bottom: 32px;
	}
	.mb-40 {
		margin-bottom: 40px;
	}
	.mb-48 {
		margin-bottom: 48px;
	}
	.mb-56 {
		margin-bottom: 56px;
	}
	.mb-100 {
		margin-bottom: 100px;
	}

	.p-8{
		padding: 8px;
	}
	.pb-8 {
		padding-bottom: 8px;
	}
	.pb-16 {
		padding-bottom: 16px;
	}
	.pb-24 {
		padding-bottom: 24px;
	}
	.pb-32 {
		padding-bottom: 32px;
	}
	.pb-40 {
		padding-bottom: 40px;
	}
	.pb-48 {
		padding-bottom: 48px;
	}
	.pb-56 {
		padding-bottom: 56px;
	}
	.pb-72 {
		padding-bottom: 72px;
	}
	.pb-100 {
		padding-bottom: 100px;
	}

	.pt-8 {
		padding-top: 8px;
	}
	.pt-16 {
		padding-top: 16px;
	}
	.pt-24 {
		padding-top: 24px;
	}
	.pt-32 {
		padding-top: 32px;
	}
	.pt-40 {
		padding-top: 40px;
	}
	.pt-48 {
		padding-top: 48px;
	}
	.pt-56 {
		padding-top: 56px;
	}
	.pt-72 {
		padding-top: 72px;
	}
	.pt-100 {
		padding-top: 100px;
	}

	.pl-8 {
		padding-left: 8px;
	}
	.pl-16 {
		padding-left: 16px;
	}
	.pl-24 {
		padding-left: 24px;
	}
	.pl-32 {
		padding-left: 32px;
	}
	.pl-40 {
		padding-left: 40px;
	}
	.pl-48 {
		padding-left: 48px;
	}
	.pl-56 {
		padding-left: 56px;
	}
	.pl-72 {
		padding-left: 72px;
	}
	.pl-100 {
		padding-left: 100px;
	}

	.pr-8 {
		padding-right: 8px;
	}
	.pr-16 {
		padding-right: 16px;
	}
	.pr-24 {
		padding-right: 24px;
	}
	.pr-32 {
		padding-right: 32px;
	}
	.pr-40 {
		padding-right: 40px;
	}
	.pr-48 {
		padding-right: 48px;
	}
	.pr-56 {
		padding-right: 56px;
	}
	.pr-72 {
		padding-right: 72px;
	}
	.pr-100 {
		padding-right: 100px;
	}

	.m-small {
		width: 160px;
		height: 40px;
	}
	.mt-8 {
		margin-top: 8px;
	}
	.mt-16 {
		margin-top: 16px;
	}
	.mt-24 {
		margin-top: 24px;
	}
	.mt-32 {
		margin-top: 32px;
	}
	.mt-40 {
		margin-top: 40px;
	}
	.mt-48 {
		margin-top: 48px;
	}
	.mt-56 {
		margin-top: 56px;
	}
	.mt-100 {
		margin-top: 100px;
	}
	.pointer {
		cursor: pointer;
	}

	.gap-30 {
		gap: 30px;
	}
	.gap-4 {
		gap: 4px;
	}
	.gap-8 {
		gap: 8px;
	}
	.gap-12 {
		gap: 12px;
	}
	.gap-16 {
		gap: 16px;
	}
	.gap-24 {
		gap: 24px;
	}
	.gap-32 {
		gap: 32px;
	}
	.gap-40 {
		gap: 40px;
	}
	.gap-48 {
		gap: 48px;
	}

	.grid-2 {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: min-content;
	}
	.grid-3 {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: min-content;
	}
	.grid-4 {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: min-content;
	}

	.flex {
		display: flex;
	}
	.column {
		display: flex;
		flex-direction: column;
	}

	.row {
		display: flex;
		flex-direction: row;
	}

	.justify-center {
		justify-content: center;
	}

	.items-start {
		align-items: flex-start;
	}
	.items-center {
		align-items: center;
	}

	.self-center {
		display: flex;
		align-self: center;
	}
	.self-end {
		display: flex;
		align-self: end;
	}

	.justify-between {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.center {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.end {
		display: flex;
		align-items: end;
	}

	.black{
		color: black;
	}
	.basic-blue{
		color: #3182fb;
	}
	.highlight{
		color:#2652c5;
	}
	.blue {
		color: #0053fd;
	}
	.new-blue {
		color: #aebddd;
	}
	.red {
		color: #c91c1c;
	}
	.new-red {
		color: #ff7373;
	}
	.white {
		color: #ffffff;
	}
	.gray {
		color: #a8a8a8;
	}
	.gray-dark {
		color: #464646;
	}
	.gray-light {
		color: #f8f8f8;
	}
	.yellow {
		color: #e3c918;
	}
	.green {
		color: #3eaf87;
	}

	.bg-newblue {
		background-color: #aebddd;
	}
	.bg-blue {
		background-color: #0053fd;
	}
	.bg-white {
		background-color: #ffffff;
	}
	.bg-red {
		background-color: #c91c1c;
	}
	.bg-green {
		background-color: #3eaf87;
	}
	.bg-gray {
		background-color: #a8a8a8;
	}
	.bg-gray-light {
		background-color: #dddddd;
	}

	.bg-cool-gray {
		background-color: #f8f9fb;
	}

	.ol-blue {
		border: 1px solid #0053fd;
	}
	.ol-gray {
		border: 1px solid #a8a8a8;
	}

	.tiny {
		height: 30px;
	}
	.small {
		height: 40px;
	}
	.large {
		height: 56px;
	}
	.large-min {
		min-height: 56px;
	}
	.large-circle {
		border-radius: 24px;
		height: 48px;
		width: 48px;
	}
	.circle {
		border-radius: 16px;
		height: 32px;
		width: 32px;
	}
	.small-circle {
		border-radius: 8px;
		height: 16px;
		width: 16px;
	}
	.underline {
		text-decoration: underline;
	}
	.hidden {
		position: absolute;
		width: 0;
		height: 0;
		padding: 0;
		overflow: hidden;
		border: 0;
	}
	:root {
    	--color-primary: #4282ed;
		--color-primary-gradient: linear-gradient(
		  90deg,
		  #6aaaf4 0%,
		  #5584f4 49.99%,
		  #355adc 100%
	);
	--color-primary-hover: #e8effb;

	--color-gray-text: #566384;
	--color-gray-icon: #808695;
	--color-gray-sub: #9599a5;
	--color-gray-box-line: #b9babe;
	--color-gray-line: #D7D9DD;
	--color-gray-line2: #E4E6EA;
	--color-gray-bg: #f4f5f7;

	--color-black-text: #262626;
	--color-black-text-disabled: #999999;
	--color-black-text-sub: #bcbcbc;

	--color-white-bg1: #f5f5f5;
	--color-white-bg2: #f9fafc;
	--color-white-bg3: #ffffff;

	--color-state-error: #f3594f;
	--color-state-info: #1890ff;
	--color-state-success: #6eca40;
	--color-state-warning: #ffbe24;
  }
`;

export default globalStyles;
