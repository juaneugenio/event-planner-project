/** @format */

import "./TotalCost.css";

const TotalCost = ({ totalCosts, ItemsDisplay }) => {

  const total_amount = totalCosts.venueTotalCost + totalCosts.avTotalCost + totalCosts.mealsTotalCost;
  // console.log("👉 L-7 ▶︎▶︎", total_amount);


	return (
		<div className="pricing-app">
			<div className="display_box">
				<div className="header">
					<p className="preheading">
						<span>Total cost for the event</span>
					</p>
				</div>
				<div>
					<h2 id="pre_fee_cost_display" className="price">
						${total_amount}
					</h2>

					<div className="render_items"> 
            <ItemsDisplay />
          </div>
				</div>
			</div>
		</div>
	);
};

export default TotalCost;
