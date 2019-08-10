import React, { Component, Fragment } from "react";
import "../assets/styles.css";
import logo from "../assets/images/pokemon-icon.png";

export default class Details extends Component {
	render() {
		return (
			<Fragment>
				{this.props.data == "" ? (
					<div className="blank">
						<img className="logo" src={logo} alt="" />
					</div>
				) : (
					<Fragment>
						<div className="header">
							<div className="title">Details Pokemon</div>
						</div>
						<div className="body">
							<div className="pokemon-image">
								<img
									src={this.props.data.sprites.front_default}
									alt="Front"
									className="image"
								/>
								<img
									src={this.props.data.sprites.back_default}
									alt="Back"
									className="image"
								/>
							</div>
							<div className="pokemon-name">
								{this.props.data.name}
							</div>
							<div className="pokemon-type">
								{this.props.data.types.map((item, index) => {
									return (
										<div key={index} className="type">
											{item.type.name}
										</div>
									);
								})}
							</div>
						</div>
					</Fragment>
				)}
			</Fragment>
		);
	}
}
