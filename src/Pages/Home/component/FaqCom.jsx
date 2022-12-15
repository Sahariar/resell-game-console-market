import React from "react";

const FaqCom = () => {
	return (
		<section className="py-20">
			<div className="container flex flex-col justify-center px-4 mx-auto md:p-8 py-12 space-y-24">
				<div>
					<h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-primary">
						Frequently Asked Questions
					</h2>
					<p className="max-w-3xl mx-auto mt-4 text-xl text-center ">
						Your most Frequently Asked Question and Answers
					</p>
				</div>
				<div className="space-y-4 lg:w-8/12 mx-auto">
					<details className="w-full border border-primary rounded-lg">
						<summary className="px-4 py-6 focus:outline-none focus-visible:ring-primary">
							Ex orci laoreet egestas sapien magna egestas scelerisque?
						</summary>
						<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
							Lectus iaculis orci metus vitae ligula dictum per. Nisl per nullam
							taciti at adipiscing est.{" "}
						</p>
					</details>
					<details className="w-full border border-primary rounded-lg">
						<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
							Lorem at arcu rutrum viverra metus sapien venenatis lobortis odio?
						</summary>
						<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
							Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna
							porttitor egestas tincidunt neque vehicula potenti.{" "}
						</p>
					</details>
					<details className="w-full border border-primary rounded-lg">
						<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
							Eleifend feugiat sollicitudin laoreet adipiscing bibendum suscipit
							erat?
						</summary>
						<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
							Justo libero tellus integer tincidunt justo semper consequat
							venenatis aliquet imperdiet. Ultricies urna proin fusce nulla
							pretium sodales vel magna et massa euismod vulputate sed.{" "}
						</p>
					</details>
				</div>
			</div>
		</section>
	);
};

export default FaqCom;
