/* eslint-disable no-console */
import { component$, Resource, useResource$ } from '@builder.io/qwik';
import {Link} from "@builder.io/qwik-city";
import {isServer} from "@builder.io/qwik/build";
import {trpc} from "../client/trpc";
import {tServer} from "../server/router";


export default component$(() => {


	//if u call it like that error will raise after link navigation, test it out
	// const itemsResource = useResource$<string>(() => getFrameworks());

	//if u call it like that error will also raise after link navigation, test it out
	// const itemsResource = useResource$<string>(() => {
	// 	if(isServer){
	// 		return getFrameworks()
	// 	}
	// 	return trpc.framework.list.query('')
	//
	// });


	const itemsResource = useResource$(async ()=>{
		if(isServer){
			const {tServer} = await import("../server/router")
			return tServer.framework.list('');
		}
		return trpc.framework.list.query('')

	})
	return (
		<div>
			<Resource
				value={itemsResource}
				onPending={()=><h1>Loading</h1>}
				onRejected={(eror)=> {
					console.log(eror)
					return(
						<h1>Error ac</h1>
					)
				}}
				onResolved={(resp)=>{
					return (
						<h1>{resp}</h1>
					)
				}}
			/>
			<Link
				href={'/SomeRoute'}
			>
				<h1>Go to SomeRoute</h1>
			</Link>
		</div>
	);
});



