const nodemailer = require('nodemailer');

const a = [
	{ roomNumber: '333', price: 50000 },
	{ roomNumber: '444', price: 50000 },
	{ roomNumber: '444', price: 50000 },
];
const orderData = a
	.map((ord) => {
		return `<tr>
<td
    style="
        border: 0;
        border-collapse: collapse;
        margin: 0;
        padding: 0;
        font-family: -apple-system,
            BlinkMacSystemFont,
            'Segoe UI',
            Roboto,
            'Helvetica Neue',
            Ubuntu,
            sans-serif;
        vertical-align: middle;
        color: #525f7f;
        font-size: 15px;
        line-height: 24px;
        width: 100%;
    "
>
 ${ord.roomNumber}
</td>
<td
    width="8"
    style="
        border: 0;
        border-collapse: collapse;
        margin: 0;
        padding: 0;
        color: #ffffff;
        font-size: 1px;
        line-height: 1px;
    "
>
    &nbsp;
</td>
<td
    align="right"
    valign="top"
    style="
        border: 0;
        border-collapse: collapse;
        margin: 0;
        padding: 0;
        font-family: -apple-system,
            BlinkMacSystemFont,
            'Segoe UI',
            Roboto,
            'Helvetica Neue',
            Ubuntu,
            sans-serif;
        vertical-align: middle;
        color: #525f7f;
        font-size: 15px;
        line-height: 24px;
    "
>
 ${new Intl.NumberFormat('vi-Vi', {
		style: 'currency',
		currency: 'VND',
 }).format(ord.price)}</td>
 </tr>`;
	})
	.toString()
	.replace(/,/g, '');

const templateEN = `
<div class="">
	<div class="aHl"></div>
	<div id=":1bt" tabindex="-1"></div>
	<div
		id=":1c4"
		class="ii gt"
		jslog="20277; u014N:xr6bB; 4:W251bGwsbnVsbCxbXV0."
	>
		<div id=":1c5" class="a3s aiL msg-6583894312104824909">
			<u></u>

			<div
				bgcolor="#f6f9fc"
				style="
					border: 0;
					margin: 0;
					padding: 0;
					min-width: 100%;
					width: 100%;
				"
			>
				<table
					bgcolor="#f6f9fc"
					border="0"
					cellpadding="0"
					cellspacing="0"
					width="100%"
					style="border: 0; margin: 0; padding: 0"
				>
					<tbody>
						<tr>
							<td
								class="m_-6583894312104824909st-Spacer m_-6583894312104824909st-Spacer--kill m_-6583894312104824909st-Spacer--height"
								height="64"
							>
								<div
									class="m_-6583894312104824909st-Spacer m_-6583894312104824909st-Spacer--kill"
								>
									&nbsp;
								</div>
							</td>
						</tr>

						<tr>
							<td style="border: 0; margin: 0; padding: 0">
								<table
									class="m_-6583894312104824909st-Wrapper"
									align="center"
									bgcolor="#ffffff"
									border="0"
									cellpadding="0"
									cellspacing="0"
									width="600"
									style="
										border-top-left-radius: 16px;
										border-top-right-radius: 16px;
										margin: 0 auto;
										min-width: 600px;
									"
								>
									<tbody>
										<tr>
											<td
												style="
													border: 0;
													margin: 0;
													padding: 0;
												"
											>
												<table
													class="m_-6583894312104824909st-Width m_-6583894312104824909st-Width--mobile"
													border="0"
													cellpadding="0"
													cellspacing="0"
													width="600"
													style="min-width: 600px"
												>
													<tbody>
														<tr>
															<td
																align="center"
																height="0"
																style="
																	border: 0;
																	margin: 0;
																	padding: 0;
																	color: #ffffff;
																	display: none !important;
																	font-size: 1px;
																	line-height: 1px;
																	max-height: 0;
																	max-width: 0;
																	opacity: 0;
																	overflow: hidden;
																"
															>
																<span
																	class="m_-6583894312104824909st-Delink m_-6583894312104824909st-Delink--preheader"
																	style="
																		color: #ffffff;
																		text-decoration: none;
																	"
																>
																	Receipt from
																	<span
																		class="il"
																		>Pet88</span
																	>
																	[#1232-1212]
																	Amount paid
																	30,000,000₫
																	Date paid
																	Nov 11,
																	2022,
																	5:19:34 PM
																	‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr />&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr />&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr />&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr />&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr />&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr />&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr />&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr />&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr />&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr />&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr />&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr />&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr />&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr />&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr />&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr />&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr />&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr />&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr />&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr />&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌<wbr />&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;
																</span>
															</td>
														</tr>
													</tbody>
												</table>

												<div
													style="
														background-color: #f6f9fc;
														padding-top: 20px;
													"
												>
													<table
														dir="ltr"
														width="100%"
														style="
															border: 0;
															border-collapse: collapse;
															margin: 0;
															padding: 0;
															background-color: #ffffff;
														"
													>
														<tbody>
															<tr>
																<td
																	style="
																		background-color: #525f7f;
																		border: 0;
																		border-collapse: collapse;
																		margin: 0;
																		padding: 0;
																		font-size: 0;
																		line-height: 0px;
																		background-size: 100%
																			100%;
																		border-top-left-radius: 5px;
																	"
																	align="right"
																	height="156"
																	valign="bottom"
																	width="252"
																>
																	<a
																		style="
																			outline: 0;
																			text-decoration: none;
																		"
																	>
																		<img
																			alt=""
																			height="156"
																			width="252"
																			src="https://ci4.googleusercontent.com/proxy/9-vzO6oIjzdWLz5vxJipUa48-_jdteSGmZPi_jXjI1P9gfsxKXGx5ZC6HCp7gEsdL6c6qVHcVmPrfRVxxz7Yw1GWRX10g1zsI66f3vStuGoBVesH24A0bVJsUdvql3xAbjPcKaA_8g=s0-d-e1-ft#https://stripe-images.s3.amazonaws.com/notifications/hosted/20180110/Header/Left.png"
																			style="
																				display: block;
																				border: 0;
																				line-height: 100%;
																				width: 100%;
																			"
																			class="CToWUd a6T"
																			data-bit="iit"
																			tabindex="0"
																		/>
																		<div
																			class="a6S"
																			dir="ltr"
																			style="
																				opacity: 0.01;
																				left: 419.6px;
																				top: 206px;
																			"
																		>
																			<div
																				id=":315"
																				class="T-I J-J5-Ji aQv T-I-ax7 L3 a5q"
																				title="Download"
																				role="button"
																				tabindex="0"
																				aria-label="Download attachment "
																				data-tooltip-class="a1V"
																			>
																				<div
																					class="akn"
																				>
																					<div
																						class="aSK J-J5-Ji aYr"
																					></div>
																				</div>
																			</div>
																		</div>
																	</a>
																</td>
																<td
																	style="
																		background-color: #525f7f;
																		border: 0;
																		border-collapse: collapse;
																		margin: 0;
																		padding: 0;
																		font-size: 0;
																		line-height: 0px;
																		background-size: 100%
																			100%;
																		width: 96px !important;
																	"
																	align="center"
																	height="156"
																	valign="bottom"
																>
																	<a
																		style="
																			outline: 0;
																			text-decoration: none;
																		"
																	>
																		<img
																			alt=""
																			height="156"
																			width="96"
																			src="https://ci5.googleusercontent.com/proxy/qVcMwFdTxaPrLtb6P4p5RrJTgKn7VQ7beAtuaYlivyy9UeHxe-Zw4VZCRTMELti76wUlRZoqsOKPyvBmoUHfhrFwdmzrutV-XWZ_3YAY1A-BnJMHZ2WdlDWWQI3gVHQ-HT_70Ty_zXbTI2n-5iwBMSNw=s0-d-e1-ft#https://stripe-images.s3.amazonaws.com/emails/acct_1LOJYrFnFZlEnf8r/1/twelve_degree_icon@2x.png"
																			style="
																				display: block;
																				border: 0;
																				line-height: 100%;
																			"
																			class="CToWUd"
																			data-bit="iit"
																		/>
																	</a>
																</td>
																<td
																	style="
																		background-color: #525f7f;
																		border: 0;
																		border-collapse: collapse;
																		margin: 0;
																		padding: 0;
																		font-size: 0;
																		line-height: 0px;
																		background-size: 100%
																			100%;
																		border-top-right-radius: 5px;
																	"
																	align="left"
																	height="156"
																	valign="bottom"
																	width="252"
																>
																	<a
																		style="
																			outline: 0;
																			text-decoration: none;
																		"
																	>
																		<img
																			alt=""
																			height="156"
																			width="252"
																			src="https://ci5.googleusercontent.com/proxy/agqjJXCE9UqmeYtipoZMl4NQ5plhy-TKT_WsqxR18QMhNXU7t-dJPtqpaqwtjzrOslBvOe18-HlXRVknnUuUTIhtrECzchPqX06DXBwznI7p5hMwQb0pIl-d9gWCXjLTWHpQSf0rxKo=s0-d-e1-ft#https://stripe-images.s3.amazonaws.com/notifications/hosted/20180110/Header/Right.png"
																			style="
																				display: block;
																				border: 0;
																				line-height: 100%;
																				width: 100%;
																			"
																			class="CToWUd a6T"
																			data-bit="iit"
																			tabindex="0"
																		/>
																		<div
																			class="a6S"
																			dir="ltr"
																			style="
																				opacity: 0.01;
																				left: 767.6px;
																				top: 206px;
																			"
																		>
																			<div
																				id=":316"
																				class="T-I J-J5-Ji aQv T-I-ax7 L3 a5q"
																				title="Download"
																				role="button"
																				tabindex="0"
																				aria-label="Download attachment "
																				data-tooltip-class="a1V"
																			>
																				<div
																					class="akn"
																				>
																					<div
																						class="aSK J-J5-Ji aYr"
																					></div>
																				</div>
																			</div>
																		</div>
																	</a>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
												<table
													class="m_-6583894312104824909st-Width m_-6583894312104824909st-Width--mobile"
													border="0"
													cellpadding="0"
													cellspacing="0"
													width="600"
													style="min-width: 600px"
												>
													<tbody>
														<tr>
															<td
																align="center"
																style="
																	border: 0;
																	border-collapse: collapse;
																	margin: 0;
																	padding: 0;
																	width: 472px;
																	font-family: -apple-system,
																		BlinkMacSystemFont,
																		'Segoe UI',
																		Roboto,
																		'Helvetica Neue',
																		Ubuntu,
																		sans-serif;
																	vertical-align: middle;
																	color: #32325d;
																	font-size: 24px;
																	line-height: 32px;
																"
															>
																Receipt from
																<span class="il"
																	>Pet88</span
																>
															</td>
														</tr>
														<tr>
															<td
																class="m_-6583894312104824909st-Spacer"
																colspan="3"
																height="12"
																style="
																	border: 0;
																	margin: 0;
																	padding: 0;
																	font-size: 1px;
																	line-height: 1px;
																"
															>
																<div
																	class="m_-6583894312104824909st-Spacer"
																>
																	&nbsp;
																</div>
															</td>
														</tr>
													</tbody>
												</table>

												<table
													class="m_-6583894312104824909st-Width m_-6583894312104824909st-Width--mobile"
													border="0"
													cellpadding="0"
													cellspacing="0"
													width="600"
													style="min-width: 600px"
												>
													<tbody>
														<tr>
															<td
																align="center"
																style="
																	border: 0;
																	border-collapse: collapse;
																	margin: 0;
																	padding: 0;
																	width: 472px;
																	font-family: -apple-system,
																		BlinkMacSystemFont,
																		'Segoe UI',
																		Roboto,
																		'Helvetica Neue',
																		Ubuntu,
																		sans-serif;
																	vertical-align: middle;
																	color: #8898aa;
																	font-size: 15px;
																	line-height: 18px;
																"
															>
																Receipt
																#1232-1212
															</td>
														</tr>
														<tr>
															<td
																class="m_-6583894312104824909st-Spacer"
																colspan="3"
																height="12"
																style="
																	border: 0;
																	margin: 0;
																	padding: 0;
																	font-size: 1px;
																	line-height: 1px;
																"
															>
																<div
																	class="m_-6583894312104824909st-Spacer"
																>
																	&nbsp;
																</div>
															</td>
														</tr>
													</tbody>
												</table>

												<table
													class="m_-6583894312104824909st-Spacer m_-6583894312104824909st-Width m_-6583894312104824909st-Width--mobile"
													border="0"
													cellpadding="0"
													cellspacing="0"
													width="100%"
												>
													<tbody>
														<tr>
															<td
																height="20"
																style="
																	border: 0;
																	margin: 0;
																	padding: 0;
																	font-size: 1px;
																	line-height: 1px;
																	max-height: 1px;
																"
															>
																<div
																	class="m_-6583894312104824909st-Spacer"
																>
																	&nbsp;
																</div>
															</td>
														</tr>
													</tbody>
												</table>

												<table
													border="0"
													cellpadding="0"
													cellspacing="0"
													width="100%"
												>
													<tbody>
														<tr>
															<td
																class="m_-6583894312104824909st-Font m_-6583894312104824909st-Font--caption"
																style="
																	border: 0;
																	margin: 0;
																	padding: 0;
																	color: #687385;
																	font-family: -apple-system,
																		'SF Pro Display',
																		'SF Pro Text',
																		'Helvetica',
																		sans-serif;
																	font-size: 12px;
																	font-weight: bold;
																	line-height: 16px;
																	text-transform: uppercase;
																"
															></td>
															<td
																width="64"
																style="
																	border: 0;
																	border-collapse: collapse;
																	margin: 0;
																	padding: 0;
																	color: #ffffff;
																	font-size: 1px;
																	line-height: 1px;
																"
															>
																&nbsp;
															</td>
															<td
																valign="top"
																style="
																	border: 0;
																	border-collapse: collapse;
																	margin: 0;
																	padding: 0;
																"
															>
																<table
																	style="
																		border: 0;
																		border-collapse: collapse;
																		margin: 0;
																		padding: 0;
																	"
																>
																	<tbody>
																		<tr>
																			<td
																				style="
																					border: 0;
																					border-collapse: collapse;
																					margin: 0;
																					padding: 0;
																					font-family: -apple-system,
																						BlinkMacSystemFont,
																						'Segoe UI',
																						Roboto,
																						'Helvetica Neue',
																						Ubuntu,
																						sans-serif;
																					vertical-align: middle;
																					color: #8898aa;
																					font-size: 12px;
																					line-height: 16px;
																					white-space: nowrap;
																					font-weight: bold;
																					text-transform: uppercase;
																				"
																			>
																				Amount
																				paid
																			</td>
																		</tr>
																		<tr>
																			<td
																				style="
																					border: 0;
																					border-collapse: collapse;
																					margin: 0;
																					padding: 0;
																					font-family: -apple-system,
																						BlinkMacSystemFont,
																						'Segoe UI',
																						Roboto,
																						'Helvetica Neue',
																						Ubuntu,
																						sans-serif;
																					vertical-align: middle;
																					color: #525f7f;
																					font-size: 15px;
																					line-height: 24px;
																					white-space: nowrap;
																				"
																			>
																				30,000,000₫
																			</td>
																		</tr>
																	</tbody>
																</table>
															</td>
															<td
																width="20"
																style="
																	border: 0;
																	border-collapse: collapse;
																	margin: 0;
																	padding: 0;
																	color: #ffffff;
																	font-size: 1px;
																	line-height: 1px;
																"
															>
																&nbsp;
															</td>
															<td
																valign="top"
																style="
																	border: 0;
																	border-collapse: collapse;
																	margin: 0;
																	padding: 0;
																"
															>
																<table
																	style="
																		border: 0;
																		border-collapse: collapse;
																		margin: 0;
																		padding: 0;
																	"
																>
																	<tbody>
																		<tr>
																			<td
																				style="
																					border: 0;
																					border-collapse: collapse;
																					margin: 0;
																					padding: 0;
																					font-family: -apple-system,
																						BlinkMacSystemFont,
																						'Segoe UI',
																						Roboto,
																						'Helvetica Neue',
																						Ubuntu,
																						sans-serif;
																					vertical-align: middle;
																					color: #8898aa;
																					font-size: 12px;
																					line-height: 16px;
																					white-space: nowrap;
																					font-weight: bold;
																					text-transform: uppercase;
																				"
																			>
																				Date
																				paid
																			</td>
																		</tr>
																		<tr>
																			<td
																				style="
																					border: 0;
																					border-collapse: collapse;
																					margin: 0;
																					padding: 0;
																					font-family: -apple-system,
																						BlinkMacSystemFont,
																						'Segoe UI',
																						Roboto,
																						'Helvetica Neue',
																						Ubuntu,
																						sans-serif;
																					vertical-align: middle;
																					color: #525f7f;
																					font-size: 15px;
																					line-height: 24px;
																					white-space: nowrap;
																				"
																			>
																				Nov
																				11,
																				2022,
																				5:19:34
																				PM
																			</td>
																		</tr>
																	</tbody>
																</table>
															</td>
															<td
																width="20"
																style="
																	border: 0;
																	border-collapse: collapse;
																	margin: 0;
																	padding: 0;
																	color: #ffffff;
																	font-size: 1px;
																	line-height: 1px;
																"
															>
																&nbsp;
															</td>
															<td
																valign="top"
																style="
																	border: 0;
																	border-collapse: collapse;
																	margin: 0;
																	padding: 0;
																"
															>
																<table
																	style="
																		border: 0;
																		border-collapse: collapse;
																		margin: 0;
																		padding: 0;
																	"
																>
																	<tbody>
																		<tr>
																			<td
																				style="
																					border: 0;
																					border-collapse: collapse;
																					margin: 0;
																					padding: 0;
																					font-family: -apple-system,
																						BlinkMacSystemFont,
																						'Segoe UI',
																						Roboto,
																						'Helvetica Neue',
																						Ubuntu,
																						sans-serif;
																					vertical-align: middle;
																					color: #8898aa;
																					font-size: 12px;
																					line-height: 16px;
																					white-space: nowrap;
																					font-weight: bold;
																					text-transform: uppercase;
																				"
																			>
																				Payment
																				method
																			</td>
																		</tr>
																		<tr>
																			<td
																				style="
																					border: 0;
																					border-collapse: collapse;
																					margin: 0;
																					padding: 0;
																					font-family: -apple-system,
																						BlinkMacSystemFont,
																						'Segoe UI',
																						Roboto,
																						'Helvetica Neue',
																						Ubuntu,
																						sans-serif;
																					vertical-align: middle;
																					color: #525f7f;
																					font-size: 15px;
																					line-height: 24px;
																					white-space: nowrap;
																				"
																			>
																				<span>
																					<img
																						alt="Visa"
																						height="16"
																						src="https://ci6.googleusercontent.com/proxy/sArGgfjFitta_yD9TD9j3RCM9ZqkGaM-NpEgFy0O68_yNFMEHJES4Qi1Wf0Evj4eHJshAgdkX291tZt8sQkYzz3eZPWamyk7WJYzSWGZ_0oJ65NsUe_b9M65Zcr4MLvurPmt9HQ=s0-d-e1-ft#https://stripe-images.s3.amazonaws.com/emails/receipt_assets/card/visa-dark@2x.png"
																						style="
																							border: 0;
																							margin: 0;
																							padding: 0;
																							vertical-align: text-bottom;
																						"
																						width="36"
																						class="CToWUd"
																						data-bit="iit"
																					/>
																				</span>
																				<span>
																					-
																					4242
																				</span>
																			</td>
																		</tr>
																	</tbody>
																</table>
															</td>
															<td
																width="64"
																style="
																	border: 0;
																	border-collapse: collapse;
																	margin: 0;
																	padding: 0;
																	color: #ffffff;
																	font-size: 1px;
																	line-height: 1px;
																"
															>
																&nbsp;
															</td>
														</tr>
													</tbody>
												</table>

												<table
													class="m_-6583894312104824909st-Spacer m_-6583894312104824909st-Width m_-6583894312104824909st-Width--mobile"
													border="0"
													cellpadding="0"
													cellspacing="0"
													width="100%"
												>
													<tbody>
														<tr>
															<td
																height="32"
																style="
																	border: 0;
																	margin: 0;
																	padding: 0;
																	font-size: 1px;
																	line-height: 1px;
																	max-height: 1px;
																"
															>
																<div
																	class="m_-6583894312104824909st-Spacer"
																>
																	&nbsp;
																</div>
															</td>
														</tr>
													</tbody>
												</table>

												<table
													class="m_-6583894312104824909st-Width m_-6583894312104824909st-Width--mobile"
													border="0"
													cellpadding="0"
													cellspacing="0"
													width="600"
													style="min-width: 600px"
												>
													<tbody>
														<tr>
															<td
																class="m_-6583894312104824909st-Spacer"
																colspan="3"
																height="8"
																style="
																	border: 0;
																	margin: 0;
																	padding: 0;
																	font-size: 1px;
																	line-height: 1px;
																"
															>
																<div
																	class="m_-6583894312104824909st-Spacer"
																>
																	&nbsp;
																</div>
															</td>
														</tr>
														<tr>
															<td
																class="m_-6583894312104824909st-Spacer m_-6583894312104824909st-Spacer--gutter"
																style="
																	border: 0;
																	margin: 0;
																	padding: 0;
																	font-size: 1px;
																	line-height: 1px;
																"
																width="48"
															>
																<div
																	class="m_-6583894312104824909st-Spacer"
																>
																	&nbsp;
																</div>
															</td>
															<td
																class="m_-6583894312104824909st-Font m_-6583894312104824909st-Font--caption"
																style="
																	border: 0;
																	margin: 0;
																	padding: 0;
																	color: #687385;
																	font-family: -apple-system,
																		'SF Pro Display',
																		'SF Pro Text',
																		'Helvetica',
																		sans-serif;
																	font-weight: 400;
																	font-size: 12px;
																	line-height: 16px;
																	text-transform: uppercase;
																"
															>
																<span
																	class="m_-6583894312104824909st-Delink"
																	style="
																		border: 0;
																		margin: 0;
																		padding: 0;
																		font-weight: bold;
																	"
																>
																	Summary
																</span>
															</td>
															<td
																class="m_-6583894312104824909st-Spacer m_-6583894312104824909st-Spacer--gutter"
																style="
																	border: 0;
																	margin: 0;
																	padding: 0;
																	font-size: 1px;
																	line-height: 1px;
																"
																width="48"
															>
																<div
																	class="m_-6583894312104824909st-Spacer"
																>
																	&nbsp;
																</div>
															</td>
														</tr>
														<tr>
															<td
																class="m_-6583894312104824909st-Spacer"
																colspan="3"
																height="8"
																style="
																	border: 0;
																	margin: 0;
																	padding: 0;
																	font-size: 1px;
																	line-height: 1px;
																"
															>
																<div
																	class="m_-6583894312104824909st-Spacer"
																>
																	&nbsp;
																</div>
															</td>
														</tr>
													</tbody>
												</table>
												<table
													class="m_-6583894312104824909st-Blocks m_-6583894312104824909st-Width m_-6583894312104824909st-Width--mobile"
													border="0"
													cellpadding="0"
													cellspacing="0"
													width="600"
													style="min-width: 600px"
												>
													<tbody>
														<tr>
															<td
																class="m_-6583894312104824909st-Spacer"
																colspan="3"
																height="24"
																style="
																	border: 0;
																	margin: 0;
																	padding: 0;
																	font-size: 1px;
																	line-height: 1px;
																"
															>
																<div
																	class="m_-6583894312104824909st-Spacer"
																>
																	&nbsp;
																</div>
															</td>
														</tr>
														<tr>
															<td
																class="m_-6583894312104824909st-Spacer m_-6583894312104824909st-Spacer--kill"
																style="
																	border: 0;
																	margin: 0;
																	padding: 0;
																	font-size: 1px;
																	line-height: 1px;
																"
																width="48"
															>
																<div
																	class="m_-6583894312104824909st-Spacer"
																>
																	&nbsp;
																</div>
															</td>
															<td
																style="
																	border: 0;
																	margin: 0;
																	padding: 0;
																"
															>
																<table
																	class="m_-6583894312104824909st-Blocks-inner"
																	bgcolor="#f6f9fc"
																	border="0"
																	cellpadding="0"
																	cellspacing="0"
																	style="
																		border-radius: 8px;
																	"
																	width="100%"
																>
																	<tbody>
																		<tr>
																			<td
																				style="
																					border: 0;
																					margin: 0;
																					padding: 0;
																				"
																			>
																				<table
																					class="m_-6583894312104824909st-Blocks-item"
																					border="0"
																					cellpadding="0"
																					cellspacing="0"
																					width="100%"
																				>
																					<tbody>
																						<tr>
																							<td
																								class="m_-6583894312104824909st-Spacer"
																								colspan="3"
																								height="12"
																								style="
																									border: 0;
																									margin: 0;
																									padding: 0;
																									font-size: 1px;
																									line-height: 1px;
																								"
																							>
																								<div
																									class="m_-6583894312104824909st-Spacer"
																								>
																									&nbsp;
																								</div>
																							</td>
																						</tr>
																						<tr>
																							<td
																								class="m_-6583894312104824909st-Spacer m_-6583894312104824909st-Spacer--gutter"
																								style="
																									border: 0;
																									margin: 0;
																									padding: 0;
																									font-size: 1px;
																									line-height: 1px;
																								"
																								width="16"
																							>
																								<div
																									class="m_-6583894312104824909st-Spacer"
																								>
																									&nbsp;
																								</div>
																							</td>
																							<td
																								class="m_-6583894312104824909st-Blocks-item-cell m_-6583894312104824909st-Font m_-6583894312104824909st-Font--body"
																								style="
																									border: 0;
																									margin: 0;
																									padding: 0;
																									color: #414552;
																									font-family: -apple-system,
																										'SF Pro Display',
																										'SF Pro Text',
																										'Helvetica',
																										sans-serif;
																									font-size: 16px;
																									line-height: 24px;
																								"
																							>
																								<table
																									style="
																										padding-left: 5px;
																										padding-right: 5px;
																									"
																									width="100%"
																								>
																									<tbody>
																										<tr>
																											<td></td>
																										</tr>
                                                                                                        ${orderData}
                                                                                                        <tr>
                                                                                                        <td
                                                                                                            style="
                                                                                                                border: 0;
                                                                                                                border-collapse: collapse;
                                                                                                                margin: 0;
                                                                                                                padding: 0;
                                                                                                                font-family: -apple-system,
                                                                                                                    BlinkMacSystemFont,
                                                                                                                    'Segoe UI',
                                                                                                                    Roboto,
                                                                                                                    'Helvetica Neue',
                                                                                                                    Ubuntu,
                                                                                                                    sans-serif;
                                                                                                                vertical-align: middle;
                                                                                                                color: #525f7f;
                                                                                                                font-size: 15px;
                                                                                                                line-height: 24px;
                                                                                                                width: 100%;
                                                                                                            "
                                                                                                        >
VAT
                                                                                                        </td>
                                                                                                        <td
                                                                                                            width="8"
                                                                                                            style="
                                                                                                                border: 0;
                                                                                                                border-collapse: collapse;
                                                                                                                margin: 0;
                                                                                                                padding: 0;
                                                                                                                color: #ffffff;
                                                                                                                font-size: 1px;
                                                                                                                line-height: 1px;
                                                                                                            "
                                                                                                        >
                                                                                                            &nbsp;
                                                                                                        </td>
                                                                                                        <td
                                                                                                            align="right"
                                                                                                            valign="top"
                                                                                                            style="
                                                                                                                border: 0;
                                                                                                                border-collapse: collapse;
                                                                                                                margin: 0;
                                                                                                                padding: 0;
                                                                                                                font-family: -apple-system,
                                                                                                                    BlinkMacSystemFont,
                                                                                                                    'Segoe UI',
                                                                                                                    Roboto,
                                                                                                                    'Helvetica Neue',
                                                                                                                    Ubuntu,
                                                                                                                    sans-serif;
                                                                                                                vertical-align: middle;
                                                                                                                color: #525f7f;
                                                                                                                font-size: 15px;
                                                                                                                line-height: 24px;
                                                                                                            "
                                                                                                        >
                                                                                                            8%
                                                                                                        </td>
                                                                                                    </tr>
																										<tr>
																											<td
																												colspan="3"
																												height="6"
																												style="
																													border: 0;
																													border-collapse: collapse;
																													margin: 0;
																													padding: 0;
																													color: #ffffff;
																													font-size: 1px;
																													line-height: 1px;
																												"
																											>
																												&nbsp;
																											</td>
																										</tr>
																										<tr>
																											<td
																												colspan="3"
																												height="6"
																												style="
																													border: 0;
																													border-collapse: collapse;
																													margin: 0;
																													padding: 0;
																													color: #ffffff;
																													font-size: 1px;
																													line-height: 1px;
																												"
																											>
																												&nbsp;
																											</td>
																										</tr>

																										<tr>
																											<td
																												bgcolor="e6ebf1"
																												colspan="3"
																												height="1"
																												style="
																													border: 0;
																													border-collapse: collapse;
																													margin: 0;
																													padding: 0;
																													color: #ffffff;
																													font-size: 1px;
																													line-height: 1px;
																												"
																											>
																												&nbsp;
																											</td>
																										</tr>

																										<tr>
																											<td
																												colspan="3"
																												height="8"
																												style="
																													border: 0;
																													border-collapse: collapse;
																													margin: 0;
																													padding: 0;
																													color: #ffffff;
																													font-size: 1px;
																													line-height: 1px;
																												"
																											>
																												&nbsp;
																											</td>
																										</tr>

																										<tr>
																											<td
																												style="
																													border: 0;
																													border-collapse: collapse;
																													margin: 0;
																													padding: 0;
																													font-family: -apple-system,
																														BlinkMacSystemFont,
																														'Segoe UI',
																														Roboto,
																														'Helvetica Neue',
																														Ubuntu,
																														sans-serif;
																													vertical-align: middle;
																													color: #525f7f;
																													font-size: 15px;
																													line-height: 24px;
																													width: 100%;
																												"
																											>
																												<strong
																													>Amount
																													charged</strong
																												>
																											</td>
																											<td
																												width="8"
																												style="
																													border: 0;
																													border-collapse: collapse;
																													margin: 0;
																													padding: 0;
																													color: #ffffff;
																													font-size: 1px;
																													line-height: 1px;
																												"
																											>
																												&nbsp;
																											</td>
																											<td
																												align="right"
																												valign="top"
																												style="
																													border: 0;
																													border-collapse: collapse;
																													margin: 0;
																													padding: 0;
																													font-family: -apple-system,
																														BlinkMacSystemFont,
																														'Segoe UI',
																														Roboto,
																														'Helvetica Neue',
																														Ubuntu,
																														sans-serif;
																													vertical-align: middle;
																													color: #525f7f;
																													font-size: 15px;
																													line-height: 24px;
																												"
																											>
																												<strong
																													>30,000,000₫</strong
																												>
																											</td>
																										</tr>
																										<tr>
																											<td
																												colspan="3"
																												height="6"
																												style="
																													border: 0;
																													border-collapse: collapse;
																													margin: 0;
																													padding: 0;
																													color: #ffffff;
																													font-size: 1px;
																													line-height: 1px;
																												"
																											>
																												&nbsp;
																											</td>
																										</tr>
																									</tbody>
																								</table>
																							</td>
																							<td
																								class="m_-6583894312104824909st-Spacer m_-6583894312104824909st-Spacer--gutter"
																								style="
																									border: 0;
																									margin: 0;
																									padding: 0;
																									font-size: 1px;
																									line-height: 1px;
																								"
																								width="16"
																							>
																								<div
																									class="m_-6583894312104824909st-Spacer"
																								>
																									&nbsp;
																								</div>
																							</td>
																						</tr>
																						<tr>
																							<td
																								class="m_-6583894312104824909st-Spacer"
																								colspan="3"
																								height="12"
																								style="
																									border: 0;
																									margin: 0;
																									padding: 0;
																									font-size: 1px;
																									line-height: 1px;
																								"
																							>
																								<div
																									class="m_-6583894312104824909st-Spacer"
																								>
																									&nbsp;
																								</div>
																							</td>
																						</tr>
																					</tbody>
																				</table>
																			</td>
																		</tr>
																	</tbody>
																</table>
															</td>
															<td
																class="m_-6583894312104824909st-Spacer m_-6583894312104824909st-Spacer--kill"
																style="
																	border: 0;
																	margin: 0;
																	padding: 0;
																	font-size: 1px;
																	line-height: 1px;
																"
																width="48"
															>
																<div
																	class="m_-6583894312104824909st-Spacer"
																>
																	&nbsp;
																</div>
															</td>
														</tr>
														<tr>
															<td
																class="m_-6583894312104824909st-Spacer"
																colspan="3"
																height="24"
																style="
																	border: 0;
																	margin: 0;
																	padding: 0;
																	font-size: 1px;
																	line-height: 1px;
																"
															>
																<div
																	class="m_-6583894312104824909st-Spacer"
																>
																	&nbsp;
																</div>
															</td>
														</tr>
													</tbody>
												</table>

												<table
													class="m_-6583894312104824909st-Divider m_-6583894312104824909st-Width m_-6583894312104824909st-Width--mobile"
													border="0"
													cellpadding="0"
													cellspacing="0"
													width="600"
													style="min-width: 600px"
												>
													<tbody>
														<tr>
															<td
																class="m_-6583894312104824909st-Spacer m_-6583894312104824909st-Spacer--divider"
																colspan="3"
																height="24"
																style="
																	border: 0;
																	margin: 0;
																	padding: 0;
																	font-size: 1px;
																	line-height: 1px;
																	max-height: 1px;
																"
															>
																<div
																	class="m_-6583894312104824909st-Spacer"
																>
																	&nbsp;
																</div>
															</td>
														</tr>
														<tr>
															<td
																class="m_-6583894312104824909st-Spacer m_-6583894312104824909st-Spacer--gutter"
																style="
																	border: 0;
																	margin: 0;
																	padding: 0;
																	font-size: 1px;
																	line-height: 1px;
																	max-height: 1px;
																"
																width="48"
															>
																<div
																	class="m_-6583894312104824909st-Spacer"
																>
																	&nbsp;
																</div>
															</td>
															<td
																bgcolor="#e6ebf1"
																height="1"
																style="
																	border: 0;
																	margin: 0;
																	padding: 0;
																	font-size: 1px;
																	line-height: 1px;
																	max-height: 1px;
																"
															>
																<div
																	class="m_-6583894312104824909st-Spacer"
																>
																	&nbsp;
																</div>
															</td>
															<td
																class="m_-6583894312104824909st-Spacer m_-6583894312104824909st-Spacer--gutter"
																style="
																	border: 0;
																	margin: 0;
																	padding: 0;
																	font-size: 1px;
																	line-height: 1px;
																	max-height: 1px;
																"
																width="48"
															>
																<div
																	class="m_-6583894312104824909st-Spacer"
																>
																	&nbsp;
																</div>
															</td>
														</tr>
														<tr>
															<td
																class="m_-6583894312104824909st-Spacer m_-6583894312104824909st-Spacer--divider"
																colspan="3"
																height="24"
																style="
																	border: 0;
																	margin: 0;
																	padding: 0;
																	font-size: 1px;
																	line-height: 1px;
																	max-height: 1px;
																"
															>
																<div
																	class="m_-6583894312104824909st-Spacer"
																>
																	&nbsp;
																</div>
															</td>
														</tr>
													</tbody>
												</table>

												<table
													class="m_-6583894312104824909st-Width m_-6583894312104824909st-Width--mobile"
													border="0"
													cellpadding="0"
													cellspacing="0"
													width="600"
													style="min-width: 600px"
												>
													<tbody>
														<tr>
															<td
																class="m_-6583894312104824909st-Spacer"
																colspan="3"
																height="8"
																style="
																	border: 0;
																	margin: 0;
																	padding: 0;
																	font-size: 1px;
																	line-height: 1px;
																"
															>
																<div
																	class="m_-6583894312104824909st-Spacer"
																>
																	&nbsp;
																</div>
															</td>
														</tr>
														<tr>
															<td
																class="m_-6583894312104824909st-Spacer m_-6583894312104824909st-Spacer--gutter"
																style="
																	border: 0;
																	margin: 0;
																	padding: 0;
																	font-size: 1px;
																	line-height: 1px;
																"
																width="48"
															>
																<div
																	class="m_-6583894312104824909st-Spacer"
																>
																	&nbsp;
																</div>
															</td>
															<td
																style="
																	border: 0;
																	margin: 0;
																	padding: 0;
																	color: #414552 !important;
																	font-family: -apple-system,
																		'SF Pro Display',
																		'SF Pro Text',
																		'Helvetica',
																		sans-serif;
																	font-weight: 400;
																	font-size: 16px;
																	line-height: 24px;
																"
															>
																If you have any
																questions,
																contact us at
																<a
																	style="
																		border: 0;
																		margin: 0;
																		padding: 0;
																		color: #625afa !important;
																		font-weight: bold;
																		text-decoration: none;
																	"
																	href="mailto:servicepet88@gmail.com"
																	target="_blank"
																	>servicepet88@gmail.com</a
																>.
															</td>
															<td
																class="m_-6583894312104824909st-Spacer m_-6583894312104824909st-Spacer--gutter"
																style="
																	border: 0;
																	margin: 0;
																	padding: 0;
																	font-size: 1px;
																	line-height: 1px;
																"
																width="48"
															>
																<div
																	class="m_-6583894312104824909st-Spacer"
																>
																	&nbsp;
																</div>
															</td>
														</tr>
														<tr>
															<td
																class="m_-6583894312104824909st-Spacer"
																colspan="3"
																height="8"
																style="
																	border: 0;
																	margin: 0;
																	padding: 0;
																	font-size: 1px;
																	line-height: 1px;
																"
															>
																<div
																	class="m_-6583894312104824909st-Spacer"
																>
																	&nbsp;
																</div>
															</td>
														</tr>
													</tbody>
												</table>
												<table
													class="m_-6583894312104824909st-Divider m_-6583894312104824909st-Width m_-6583894312104824909st-Width--mobile"
													border="0"
													cellpadding="0"
													cellspacing="0"
													width="600"
													style="min-width: 600px"
												>
													<tbody>
														<tr>
															<td
																class="m_-6583894312104824909st-Spacer m_-6583894312104824909st-Spacer--divider"
																colspan="3"
																height="24"
																style="
																	border: 0;
																	margin: 0;
																	padding: 0;
																	font-size: 1px;
																	line-height: 1px;
																	max-height: 1px;
																"
															>
																<div
																	class="m_-6583894312104824909st-Spacer"
																>
																	&nbsp;
																</div>
															</td>
														</tr>
														<tr>
															<td
																class="m_-6583894312104824909st-Spacer m_-6583894312104824909st-Spacer--gutter"
																style="
																	border: 0;
																	margin: 0;
																	padding: 0;
																	font-size: 1px;
																	line-height: 1px;
																	max-height: 1px;
																"
																width="48"
															>
																<div
																	class="m_-6583894312104824909st-Spacer"
																>
																	&nbsp;
																</div>
															</td>
															<td
																bgcolor="#e6ebf1"
																height="1"
																style="
																	border: 0;
																	margin: 0;
																	padding: 0;
																	font-size: 1px;
																	line-height: 1px;
																	max-height: 1px;
																"
															>
																<div
																	class="m_-6583894312104824909st-Spacer"
																>
																	&nbsp;
																</div>
															</td>
															<td
																class="m_-6583894312104824909st-Spacer m_-6583894312104824909st-Spacer--gutter"
																style="
																	border: 0;
																	margin: 0;
																	padding: 0;
																	font-size: 1px;
																	line-height: 1px;
																	max-height: 1px;
																"
																width="48"
															>
																<div
																	class="m_-6583894312104824909st-Spacer"
																>
																	&nbsp;
																</div>
															</td>
														</tr>
														<tr>
															<td
																class="m_-6583894312104824909st-Spacer m_-6583894312104824909st-Spacer--divider"
																colspan="3"
																height="24"
																style="
																	border: 0;
																	margin: 0;
																	padding: 0;
																	font-size: 1px;
																	line-height: 1px;
																	max-height: 1px;
																"
															>
																<div
																	class="m_-6583894312104824909st-Spacer"
																>
																	&nbsp;
																</div>
															</td>
														</tr>
													</tbody>
												</table>
												<table
													style="
														border: 0;
														border-collapse: collapse;
														margin: 0;
														padding: 0;
														background-color: #ffffff;
													"
												>
													<tbody>
														<tr>
															<td
																width="64"
																style="
																	border: 0;
																	border-collapse: collapse;
																	margin: 0;
																	padding: 0;
																	color: #ffffff;
																	font-size: 1px;
																	line-height: 1px;
																"
															>
																&nbsp;
															</td>
															<td
																style="
																	border: 0;
																	border-collapse: collapse;
																	margin: 0;
																	padding: 0;
																	width: 472px;
																	font-family: -apple-system,
																		BlinkMacSystemFont,
																		'Segoe UI',
																		Roboto,
																		'Helvetica Neue',
																		Ubuntu,
																		sans-serif;
																	vertical-align: middle;
																	color: #8898aa;
																	font-size: 12px;
																	line-height: 16px;
																"
															>
																Something wrong
																with the email?
																<a
																	href="https://59.email.stripe.com/CL0/https:%2F%2Fdashboard.stripe.com%2Freceipts%2Fpayment%2FCAcQARoXChVhY2N0XzFMT0pZckZuRlpsRW5mOHIoy8zHmwYyBu1EKOvV-TovFi6-iuk1X-fHBDAgBu5sfYAZotiW1gPXw3YXWHk3VXnFmx_mkPlKr5GKeJl7AkM/1/0101018474eb9832-addbd926-0ff3-47e0-a651-17f3e00cc2d7-000000/v-90z50Jpt4ctod7QaEq_GyStv1AdDLoRFpQrlXpDnU=274"
																	style="
																		border: 0;
																		margin: 0;
																		padding: 0;
																		color: #556cd6;
																		font-family: -apple-system,
																			BlinkMacSystemFont,
																			'Segoe UI',
																			Roboto,
																			'Helvetica Neue',
																			Ubuntu,
																			sans-serif;
																		text-decoration: none;
																	"
																	rel="noreferrer"
																	target="_blank"
																	data-saferedirecturl="https://www.google.com/url?q=https://59.email.stripe.com/CL0/https:%252F%252Fdashboard.stripe.com%252Freceipts%252Fpayment%252FCAcQARoXChVhY2N0XzFMT0pZckZuRlpsRW5mOHIoy8zHmwYyBu1EKOvV-TovFi6-iuk1X-fHBDAgBu5sfYAZotiW1gPXw3YXWHk3VXnFmx_mkPlKr5GKeJl7AkM/1/0101018474eb9832-addbd926-0ff3-47e0-a651-17f3e00cc2d7-000000/v-90z50Jpt4ctod7QaEq_GyStv1AdDLoRFpQrlXpDnU%3D274&amp;source=gmail&amp;ust=1670344448959000&amp;usg=AOvVaw31NOdoJRsk_kuwqPbfSozE"
																	><span
																		style="
																			border: 0;
																			margin: 0;
																			padding: 0;
																			color: #556cd6;
																			text-decoration: none;
																		"
																		>View it
																		in your
																		browser.</span
																	></a
																>
															</td>
															<td
																width="64"
																style="
																	border: 0;
																	border-collapse: collapse;
																	margin: 0;
																	padding: 0;
																	color: #ffffff;
																	font-size: 1px;
																	line-height: 1px;
																"
															>
																&nbsp;
															</td>
														</tr>
													</tbody>
												</table>

												<table
													width="100%"
													style="
														border: 0;
														border-collapse: collapse;
														margin: 0;
														padding: 0;
														background-color: #ffffff;
													"
												>
													<tbody>
														<tr>
															<td
																height="20"
																style="
																	border: 0;
																	border-collapse: collapse;
																	margin: 0;
																	padding: 0;
																	color: #ffffff;
																	font-size: 1px;
																	line-height: 1px;
																"
															>
																&nbsp;
															</td>
														</tr>
													</tbody>
												</table>

												<table
													style="
														border: 0;
														border-collapse: collapse;
														margin: 0;
														padding: 0;
														background-color: #ffffff;
													"
												>
													<tbody>
														<tr>
															<td
																width="64"
																style="
																	border: 0;
																	border-collapse: collapse;
																	margin: 0;
																	padding: 0;
																	color: #ffffff;
																	font-size: 1px;
																	line-height: 1px;
																"
															>
																&nbsp;
															</td>
															<td
																style="
																	border: 0;
																	border-collapse: collapse;
																	margin: 0;
																	padding: 0;
																	width: 472px;
																	font-family: -apple-system,
																		BlinkMacSystemFont,
																		'Segoe UI',
																		Roboto,
																		'Helvetica Neue',
																		Ubuntu,
																		sans-serif;
																	vertical-align: middle;
																	color: #8898aa;
																	font-size: 12px;
																	line-height: 16px;
																"
															>
																You're receiving
																this email
																because you made
																a purchase at
																<span class="il"
																	>Pet88</span
																>
															</td>
														</tr>
													</tbody>
												</table>
												<table
													width="100%"
													style="
														border: 0;
														border-collapse: collapse;
														margin: 0;
														padding: 0;
														background-color: #ffffff;
													"
												>
													<tbody>
														<tr>
															<td
																height="20"
																style="
																	border: 0;
																	border-collapse: collapse;
																	margin: 0;
																	padding: 0;
																	color: #ffffff;
																	font-size: 1px;
																	line-height: 1px;
																"
															>
																&nbsp;
															</td>
														</tr>
													</tbody>
												</table>

												<table
													width="100%"
													style="
														border: 0;
														border-collapse: collapse;
														margin: 0;
														padding: 0;
														background-color: #ffffff;
														border-bottom-left-radius: 5px;
														border-bottom-right-radius: 5px;
													"
												>
													<tbody>
														<tr>
															<td
																height="64"
																style="
																	border: 0;
																	border-collapse: collapse;
																	margin: 0;
																	padding: 0;
																	color: #ffffff;
																	font-size: 1px;
																	line-height: 1px;
																"
															>
																&nbsp;
															</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
					</tbody>
				</table>

				<img
					alt=""
					src="https://ci3.googleusercontent.com/proxy/Or3ZXxuwPTiLpGslRvwwqqmx256jvevKr2JbScVyJ_W9eK8lwAZpQXu9M7QdIxKVK82XRruekaoeqshS4_gfyuh-uSdkPj27k8jIcbnSR1EzbzZ6nYabMHPy_DDkaPGm0vyvg-jQeVddGfBaEHiDknoMYeHAqEixPdqpWLuMao5QiPKsuQeMSume16IbzDjGS8qJFh58tIyYAurIABA6=s0-d-e1-ft#http://59.email.stripe.com/CI0/0101018474eb9832-addbd926-0ff3-47e0-a651-17f3e00cc2d7-000000/EbPbrQLPldniVFg1Di6k8nttRkE-9URk2SywUeAddg4=274"
					style="display: none; width: 1px; height: 1px"
					class="CToWUd"
					data-bit="iit"
				/>
				<div class="yj6qo"></div>
				<div class="adL"></div>
			</div>
		</div>
	</div>

	<div class="hi"></div>
</div>

`;

// async..await is not allowed in global scope, must use a wrapper
async function sendNodeMail(dataSend) {
	// create reusable transporter object using the default SMTP transport

	let transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 587,
		secure: false, // true for 465, false for other ports
		auth: {
			user: 'servicepet88@gmail.com', // generated ethereal user
			pass: 'exgvpfzrdykzdgvl', // generated ethereal password
		},
	});

	// send mail with defined transport object
	let info = await transporter.sendMail({
		from: '"Pet88 Service" <servicepet88@gmail.com>', // sender address
		to: dataSend.recipient, // list of receivers
		subject: dataSend.subject, // Subject line
		text: dataSend.text || '', // plain text body
		html: templateEN, // html body
	});

	console.log('Message sent: %s', info.messageId);
	// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

	// Preview only available when sending through an Ethereal account
	console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
	// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

module.exports = { sendNodeMail: sendNodeMail };
