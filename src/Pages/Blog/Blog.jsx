import React from "react";

const Blog = () => {
	return (
		<section>
			{/* Post one  */}
			<div className="p-5 mx-auto sm:p-10 md:p-16">
				<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
					<img
						src="https://source.unsplash.com/random/480x360"
						alt=""
						className="w-full h-60 sm:h-96"
					/>
					<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-neutral text-neutral-content">
						<div className="space-y-2">
							<h2 className="inline-block text-2xl font-semibold sm:text-3xl">
								What are the different ways to manage a state in a React
								application?
							</h2>
						</div>
						<div className="space-y-3">
							<p>
								Managing state in your React apps isn’t as simple as using
								useState or useReducer.
							</p>
							<p>
								Not only are there are a lot of different kinds of state, but
								there often dozens of ways of managing each kind. Which should
								you choose?
							</p>
							<p>
								In this guide, we will uncover the several kinds of state in
								your React apps that you might not be aware of, plus how to
								manage them in the most effective way.
							</p>
							<p>
								Want the #1 resource to learn React? You can become a React pro
								if you study 30 minutes a day with the React Bootcamp. The Four
								Kinds of React State to Manage When we talk about state in our
								applications, it’s important to be clear about what types of
								state actually matter.
							</p>
							<p>
								There are four main types of state you need to properly manage
								in your React apps:
							</p>
							<p>
								Local state Global state Server state URL state Let's cover each
								of these in detail:
							</p>
							<p>
								Local (UI) state – Local state is data we manage in one or
								another component.
							</p>
							<p>
								Local state is most often managed in React using the useState
								hook.
							</p>
							<p>
								For example, local state would be needed to show or hide a modal
								component or to track values for a form component, such as form
								submission, when the form is disabled and the values of a form’s
								inputs.
							</p>
							<p>
								Global (UI) state – Global state is data we manage across
								multiple components.
							</p>
							<p>
								Global state is necessary when we want to get and update data
								anywhere in our app, or in multiple components at least.
							</p>
							<p>
								A common example of global state is authenticated user state. If
								a user is logged into our app, it is necessary to get and change
								their data throughout our application.
							</p>
							<p>
								Sometimes state we think should be local might become global.
							</p>
							<p>
								Server state – Data that comes from an external server that must
								be integrated with our UI state.
							</p>
							<p>
								Server state is a simple concept, but can be hard to manage
								alongside all of our local and global UI state.
							</p>
							<p>
								There are several pieces of state that must be managed every
								time you fetch or update data from an external server, including
								loading and error state.
							</p>
							<p>
								Fortunately there are tools such as SWR and React Query that
								make managing server state much easier.
							</p>
							<p>
								URL state – Data that exists on our URLs, including the pathname
								and query parameters.
							</p>
							<p>
								URL state is often missing as a category of state, but it is an
								important one. In many cases, a lot of major parts of our
								application rely upon accessing URL state. Try to imagine
								building a blog without being able to fetch a post based off of
								its slug or id that is located in the URL!
							</p>
							<p>
								There are undoubtedly more pieces of state that we could
								identify, but these are the major categories worth focusing on
								for most applications you build.
							</p>
							<p>How to Manage Local State in React</p>
							<p>
								Local state is perhaps the easiest kind of state to manage in
								React, considering there are so many tools built into the core
								React library for managing it.
							</p>
							<p>
								useState is the first tool you should reach for to manage state
								in your components.
							</p>
							<p>
								It can take accept any valid data value, including primitive and
								object values. Additionally, its setter function can be passed
								down to other components as a callback function (without needing
								optimizations like useCallback).
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* Post two  */}
			<div className="p-5 mx-auto sm:p-10 md:p-16">
				<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
					<img
						src="https://source.unsplash.com/random/480x360"
						alt=""
						className="w-full h-60 sm:h-96"
					/>
					<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-neutral text-neutral-content">
						<div className="space-y-2">
							<h2 className="inline-block text-2xl font-semibold sm:text-3xl">
								How does prototypical inheritance work?
							</h2>
						</div>
						<div className="space-y-3">
							<p>
								Every object with its methods and properties contains an
								internal and hidden property known as [[Prototype]]. The
								Prototypal Inheritance is a feature in javascript used to add
								methods and properties in objects. It is a method by which an
								object can inherit the properties and methods of another object.
								Traditionally, in order to get and set the [[Prototype]] of an
								object, we use Object.getPrototypeOf and Object.setPrototypeOf.
								Nowadays, in modern language, it is being set using __proto__.
							</p>
							<p>
								Have you ever wondered how strings, arrays or objects “know” the
								methods each of them have? How does a string know it can
								.toUpperCase() or an array know that it can .sort()? We never
								defined these methods manually, right? The answer is that these
								methods come built-in within each type of data structure thanks
								to something called prototype inheritance. In JavaScript, an
								object can inherit properties of another object. The object from
								where the properties are inherited is called the prototype. In
								short, objects can inherit properties from other objects — the
								prototypes. You’re probably wondering: why the need for
								inheritance in the first place? Well, inheritance solves the
								problem of data and logic duplication. By inheriting, objects
								can share properties and methods without the need of manually
								setting those properties and methods on each object.
							</p>
							<p>
								How to Access a Prototype’s Properties and Methods in JavaScript
								When we try to access a property of an object, the property is
								not only searched in the object itself. It's also searched in
								the prototype of the object, in the prototype of the prototype,
								and so on – until a property is found that matches the name or
								the end of the prototype chain is reached. If the property or
								method isn’t found anywhere in the prototype chain, only then
								will JavaScript return undefined. Every object in JavaScript has
								an internal property called [[Prototype]]. If we create an array
								and log it to the console like this:
							</p>
							<p>
								The double square brackets that enclose [[Prototype]] signify
								that it is an internal property, and cannot be accessed directly
								in code. To find the [[Prototype]] of an object, we will use the
								Object.getPrototypeOf() method.
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* Post two  */}
			<div className="p-5 mx-auto sm:p-10 md:p-16">
				<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
					<img
						src="https://source.unsplash.com/random/480x360"
						alt=""
						className="w-full h-60 sm:h-96"
					/>
					<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-neutral text-neutral-content">
						<div className="space-y-2">
							<h2 className="inline-block text-2xl font-semibold sm:text-3xl">
								What is a unit test? Why should we write unit tests?
							</h2>
						</div>
						<div className="space-y-3">
							<p>
                            Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.
							</p>
							<p>
                            Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.

Unit testing is a component of test-driven development (TDD), a pragmatic methodology that takes a meticulous approach to building a product by means of continual testing and revision. This testing method is also the first level of software testing, which is performed before other testing methods such as integration testing. Unit tests are typically isolated to ensure a unit does not rely on any external code or functions. Testing can be done manually but is often automated.
							</p>
							<p>
                            A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested.
							</p>
							<p>
								ETest-driven development requires that developers first write failing unit tests. Then they write code and refactor the application until the test passes. TDD typically results in an explicit and predictable code base.
							</p>
							<p>
                            Each test case is tested independently in an isolated environment, as to ensure a lack of dependencies in the code. The software developer should code criteria to verify each test case, and a testing framework can be used to report any failed tests. Developers should not make a test for every line of code, as this may take up too much time. Developers should then create tests focusing on code which could affect the behavior of the software being developed.
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* Post two  */}
			<div className="p-5 mx-auto sm:p-10 md:p-16">
				<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
					<img
						src="https://source.unsplash.com/random/480x360"
						alt=""
						className="w-full h-60 sm:h-96"
					/>
					<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-neutral text-neutral-content">
						<div className="space-y-2">
							<h2 className="inline-block text-2xl font-semibold sm:text-3xl">
								Angular vs React vs Vue?
							</h2>
						</div>
						<div className="space-y-3">
							<p>
								There are three frameworks for building web applications that
								every frontend developer has heard about: React, Vue.js, and
								Angular.
							</p>
							<p>
								React is a UI library, Angular is a fully-fledged front-end
								framework, while Vue.js is a progressive framework.
							</p>
							<p>
								They can be used almost interchangeably to build front-end
								applications, but they’re not 100 percent the same, so it makes
								sense to compare them and understand their differences.
							</p>
							<p>
								Each framework is component-based and allows the rapid creation
								of UI features.
							</p>
							<p>
								However, they all have a different structure and architecture —
								so first, we’ll look into their architectural differences to
								understand the philosophy behind them.
							</p>
							<p>Architecture React</p>
							<p>
								React doesn’t enforce a specific project structure, and as you
								can see from the official “Hello World” example below, you can
								start using React with just a few lines of code.
							</p>
							<p>
								React can be used as a UI library to render elements, without
								enforcing a specific project structure, and that’s why it’s not
								strictly a framework.
							</p>
							<p>
								React Elements are the smallest building blocks of React apps.
								They are more powerful than DOM elements because the React DOM
								makes sure to update them efficiently whenever something
								changes.
							</p>
							<p>
								Components are larger building blocks that define independent
								and reusable pieces to be used throughout the application. They
								accept inputs called props and produce elements that are then
								displayed to the user.
							</p>
							<p>
								React is based on JavaScript, but it’s mostly combined with JSX
								(JavaScript XML), a syntax extension that allows you to create
								elements that contain HTML and JavaScript at the same time.
							</p>
							<p>
								Anything you create with JSX could also be created with the
								React JavaScript API, but most developers prefer JSX because
								it’s more intuitive.
							</p>
							<p>
								Vue The Vue.js core library focuses on the View layer only. It’s
								called a progressive framework because you can extend its
								functionality with official and third-party packages, such as
								Vue Router or Vuex, to turn it into an actual framework.
							</p>
							<p>
								Although Vue is not strictly associated with the MVVM
								(Model-View-ViewModel) pattern, its design was partly inspired
								by it. With Vue, you’ll be working mostly on the ViewModel
								layer, to make sure that the application data is processed in a
								way that allows the framework to render an up-to-date View.
							</p>
							<p>
								Vue’s templating syntax lets you create View components, and it
								combines familiar HTML with special directives and features.
								This templating syntax is preferred, even though raw JavaScript
								and JSX are also supported.
							</p>
							<p>
								Components in Vue are small, self-contained, and can be reused
								throughout the application. Single File Components (SFCs) with
								the .vue extension contain HTML, CSS, and JavaScript so that all
								relevant code resides in one file.
							</p>
							<p>
								SFCs are the recommended way to organize code in Vue.js
								projects, especially larger ones. Tools such as Webpack or
								Browserify are required to transpile SFCs into working
								JavaScript code.
							</p>
							<p>
								Angular In this article, I’m discussing Angular 2, and not the
								first version of the framework which is now known as AngularJS.
							</p>
							<p>
								AngularJS, the original framework, is an MVC
								(Model-View-Controller)) framework. But in Angular 2, there’s no
								strict association with MV*-patterns as it is also
								component-based.
							</p>
							<p>
								Projects in Angular are structured into Modules, Components, and
								Services. Each Angular application has at least one root
								component and one root module.
							</p>
							<p>
								Each component in Angular contains a Template, a Class that
								defines the application logic, and MetaData (Decorators). The
								metadata for a component tells Angular where to find the
								building blocks that it needs to create and present its view.
							</p>
							<p>
								Angular templates are written in HTML but can also include
								Angular template syntax with special directives to output
								reactive data and render multiple elements, among other things.
							</p>
							<p>
								Services in Angular are used by Components to delegate
								business-logic tasks such as fetching data or validating input.
								They are a distinct part of Angular applications. While Angular
								doesn’t enforce their use, it’s highly suggested to structure
								apps as a set of distinct services that can be reused.
							</p>
							<p>
								Angular is built in TypeScript, so its use is recommended to get
								the most seamless experience, but plain JavaScript is also
								supported.
							</p>
							<p>
								Popularity React React is one of the most popular JavaScript
								projects with 160k stars on GitHub. It’s developed and
								maintained by Facebook, and it’s used internally in many of
								their projects. Additionally, it powers over 2 million websites,
								according to BuiltWith‘s usage statistics.
							</p>
							<p>
								Vue Out of the three frameworks, Vue has the most stars on
								GitHub, with 176k stars. The project is developed and led by
								ex-Googler Evan You. It’s a very strong, independent project in
								the open-source community and is used by over 1 million
								websites, according to BuiltWith.
							</p>
							<p>
								Angular Angular is developed by Google, but surprisingly it’s
								not used in some of their flagship products such as Search or
								Youtube. It’s often used in enterprise projects, and it powers
								over 97,000 websites based on BuiltWith‘s data.
							</p>
							<p>
								It’s the least starred among the three frameworks, with 68k
								stars on GitHub. However, when switching from Angular 1 to
								Angular 2, they created an entirely new repository instead of
								continuing the AngularJS project, which also has 59k stars.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Blog;
