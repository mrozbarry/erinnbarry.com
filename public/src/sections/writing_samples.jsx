import React from 'react';

function WritingSamples (props) {
	return (
		<section className="section-writing-samples">
			<h1 className="samples-title">Writing Samples</h1>

			<div className="samples">
				{writingSamples(props.samples)}
			</div>
		</section>
	)
}

function writingSamples (samples) {
	return samples.map(writingSample)
}

function writingSample (sample, idx) {
	const url = "/samples/" + sample.filename
	return (
		<a key={idx} className="sample" href={url}>
			<div className="sample-title">{sample.title}</div>
			<div className="sample-subtitle">{sample.subtitle}</div>
		</a>
	)
};


export default WritingSamples;
