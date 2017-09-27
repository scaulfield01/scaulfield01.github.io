import React from 'react';
import source from '../images/source.mp4';


export function ProfilePicture(props) {
	let profileProps = props.profileProps;
	return (
		<div className="row">
			<div className="row">
				<div className="col-md-6 col-md-offset-3 desc-text">
					<h1>{profileProps.name}<small>{profileProps.sideNote}</small></h1>
				</div>
			</div>
			<div align="center" className="col-md-6 col-md-offset-3 embed-responsive embed-responsive-16by9">
			    <video autoPlay loop muted playsInline className="embed-responsive-item">
			        <source src={profileProps.source} type="video/mp4"/>
			    </video>
			</div>
		</div>
	);
}
export function SocialIcons(props) {
	let socialObjects = props.socialProps;
	return (
		<div className="col-md-3 center-block text-center">
			<ul className="social-network social-circle">
			{ 
				socialObjects.map((socialIcon => 
					<li key={socialIcon.name}><a href={socialIcon.link} className={'ico' + socialIcon.name} title={socialIcon.name}><i className={"fa fa-" + socialIcon.name.toLowerCase()}></i></a></li>	
			))}
			</ul>
		</div>
	);
}
export function PortfolioItems(props) {
	let portfolioList = props.portfolioProps
	return (
		<div>
			<h1>PORTFOLIO</h1>
			<hr />
		{
			portfolioList.map(function(work, index) {
				return (
					<div key={index} className="row">
						<a href={work.link}>
							<img 
								className={index % 2 === 0 ? "col-md-6 col-md-push-6 img-responsive" : "col-md-6 img-responsive" }
								alt={work.name} 
								src={work.img} 
							/>
						</a>
						<div className={index % 2 === 0 ? "col-md-6 col-md-pull-6 desc-text" : "col-md-6 desc-text"}>
							<h2>{work.name}</h2>
							<p className="text-justify">{work.description}</p>
						</div>
					</div>
				)
			})
		}
		</div>
	)
}








