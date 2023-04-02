function Card({ Title }) {
  return (
    <div class="card__wrap--inner">
      <div class="card">
        <div class="card__item">
          <h2>{Title}</h2>
   
        </div>
        <div class="card__sub">
          <small>Capacity:</small>
          <small>pcs in pallet:</small>
        </div>
        <hr class="new1" />

        <div class="card__item">
          <p>
            Stock: <input></input>
          </p>
          <p>
            Net price: <input></input>
          </p>
          <p class="card__itemadditional">
            Additional on price:<input></input>
            <span> % total:</span>
            <hr class="new2" />
          </p>

          <p class="card__itemadditional">
            local addition on fz:<input></input>
            <span> % total:</span>
            <hr class="new2" />
          </p>
        </div>

        <img src="http://via.placeholder.com/290x150?text=FlexCards" />
      </div>
    </div>
  );
}

export default Card;
