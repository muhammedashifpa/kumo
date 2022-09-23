import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import { addCart } from '../../../features/cart/action';
import {useDispatch,useSelector} from 'react-redux'
import {addFav,removeFav} from '../../../features/favourite/action'




function FullView(props) {
	const user = useSelector(state => state.user);
	const dispatch = useDispatch()
	const initialValue = Object.freeze({size: 32,count: 1,});
	const [value,updateValue] = useState(initialValue)
	const handleChange = (e) => {
		updateValue({
			...value,
			[e.target.name]: Number(e.target.value),
		});
		console.log(value);
	};
	const {data}=props
	useEffect(() => {
		 function smoothproducts() {

			// Add some markup & set some CSS
			// console.log('smoothproducts is running')
			$('.sp-loading').hide();
			$('.sp-wrap').each(function() {
				$(this).addClass('sp-touch');
				var thumbQty = $('a', this).length;
				// console.log('wrap function')

				// If more than one image
				if (thumbQty > 1) {
					var firstLarge,firstThumb,
						defaultImage = $('a.sp-default', this)[0]?true:false;
					$(this).append('<div class="sp-large"></div><div class="sp-thumbs sp-tb-active"></div>');
					$('a', this).each(function(index) {
						var thumb = $('img', this).attr('src'),
							large = $(this).attr('href'),
							classes = '';
							// console.log(large)
						//set default image
						if((index === 0 && !defaultImage) || $(this).hasClass('sp-default')){
							classes = ' class="sp-current"';
							firstLarge = large;
							firstThumb = $('img', this)[0].src;
						}
						$(this).parents('.sp-wrap').find('.sp-thumbs').append('<a href="' + large + '" style="background-image:url(' + thumb + ')"'+classes+'></a>');
						$(this).remove();
					});
					$('.sp-large', this).append('<a href="' + firstLarge + '" class="sp-current-big"><img src="' + firstThumb + '" alt="" /></a>');
					$('.sp-wrap').css('display', 'inline-block');
				// If only one image
				} else {
					$(this).append('<div class="sp-large"></div>');
					$('a', this).appendTo($('.sp-large', this)).addClass('.sp-current-big');
					$('.sp-wrap').css('display', 'inline-block');
				}
			});


			// Prevent clicking while things are happening
			$(document.body).on('click', '.sp-thumbs', function(event) {
				event.preventDefault();
			});


			// Is this a touch screen or not?
			$(document.body).on('mouseover', function(event) {
				$('.sp-wrap').removeClass('sp-touch').addClass('sp-non-touch');
				event.preventDefault();
			});

			$(document.body).on('touchstart', function() {
				$('.sp-wrap').removeClass('sp-non-touch').addClass('sp-touch');
			});

			// Clicking a thumbnail
			$(document.body).on('click', '.sp-tb-active a', function(event) {

				event.preventDefault();
				$(this).parent().find('.sp-current').removeClass();
				$(this).addClass('sp-current');
				$(this).parents('.sp-wrap').find('.sp-thumbs').removeClass('sp-tb-active');
				$(this).parents('.sp-wrap').find('.sp-zoom').remove();

				var currentHeight = $(this).parents('.sp-wrap').find('.sp-large').height(),
					currentWidth = $(this).parents('.sp-wrap').find('.sp-large').width();
				$(this).parents('.sp-wrap').find('.sp-large').css({
					overflow: 'hidden',
					height: currentHeight + 'px',
					width: currentWidth + 'px'
				});

				$(this).addClass('sp-current').parents('.sp-wrap').find('.sp-large a').remove();

				var nextLarge = $(this).parent().find('.sp-current').attr('href'),
					nextThumb = get_url_from_background($(this).parent().find('.sp-current').css('backgroundImage'));

				$(this).parents('.sp-wrap').find('.sp-large').html('<a href="' + nextLarge + '" class="sp-current-big"><img src="' + nextThumb + '"/></a>');
				$(this).parents('.sp-wrap').find('.sp-large').hide().fadeIn(250, function() {

					var autoHeight = $(this).parents('.sp-wrap').find('.sp-large img').height();

					$(this).parents('.sp-wrap').find('.sp-large').animate({
						height: autoHeight
					}, 'fast', function() {
						$('.sp-large').css({
							height: 'auto',
							width: 'auto'
						});
					});

					$(this).parents('.sp-wrap').find('.sp-thumbs').addClass('sp-tb-active');
				});
			});

			// Zoom In non-touch
			$(document.body).on('mouseenter', '.sp-non-touch .sp-large', function(event) {
				var largeUrl = $('a', this).attr('href');
				$(this).append('<div class="sp-zoom"><img src="' + largeUrl + '"/></div>');
				$(this).find('.sp-zoom').fadeIn(250);
				event.preventDefault();
			});

			// Zoom Out non-touch
			$(document.body).on('mouseleave', '.sp-non-touch .sp-large', function(event) {
				$(this).find('.sp-zoom').fadeOut(250, function() {
					$(this).remove();
				});
				event.preventDefault();
			});

			// Open in Lightbox non-touch
			$(document.body).on('click', '.sp-non-touch .sp-zoom', function(event) {
				var currentImg = $(this).html(),
					thumbAmt = $(this).parents('.sp-wrap').find('.sp-thumbs a').length,
					currentThumb = ($(this).parents('.sp-wrap').find('.sp-thumbs .sp-current').index())+1;
				$(this).parents('.sp-wrap').addClass('sp-selected');
				$('body').append("<div class='sp-lightbox' data-currenteq='"+currentThumb+"'>" + currentImg + "</div>");

				if(thumbAmt > 1){
					$('.sp-lightbox').append("<a href='#' id='sp-prev'></a><a href='#' id='sp-next'></a>");
					if(currentThumb == 1) {
						$('#sp-prev').css('opacity','.1');
					} else if (currentThumb == thumbAmt){
						$('#sp-next').css('opacity','.1');
					}
				}
				$('.sp-lightbox').fadeIn();
				event.preventDefault();
			});

			// Open in Lightbox touch
			$(document.body).on('click', '.sp-large a', function(event) {
				var currentImg = $(this).attr('href'),
					thumbAmt = $(this).parents('.sp-wrap').find('.sp-thumbs a').length,
					currentThumb = ($(this).parents('.sp-wrap').find('.sp-thumbs .sp-current').index())+1;

				$(this).parents('.sp-wrap').addClass('sp-selected');
				$('body').append('<div class="sp-lightbox" data-currenteq="'+currentThumb+'"><img src="' + currentImg + '"/></div>');

				if(thumbAmt > 1){
					$('.sp-lightbox').append("<a href='#' id='sp-prev'></a><a href='#' id='sp-next'></a>");
					if(currentThumb == 1) {
						$('#sp-prev').css('opacity','.1');
					} else if (currentThumb == thumbAmt){
						$('#sp-next').css('opacity','.1');
					}
				}
				$('.sp-lightbox').fadeIn();
				event.preventDefault();
			});

			// Pagination Forward
			$(document.body).on('click', '#sp-next', function(event) {
				event.stopPropagation();
				var currentEq = $('.sp-lightbox').data('currenteq'),
					totalItems = $('.sp-selected .sp-thumbs a').length;

					if(currentEq >= totalItems) {
					} else {
						var nextEq = currentEq + 1,
						newImg = $('.sp-selected .sp-thumbs').find('a:eq('+currentEq+')').attr('href'),
						newThumb = get_url_from_background($('.sp-selected .sp-thumbs').find('a:eq('+currentEq+')').css('backgroundImage'));
						if (currentEq == (totalItems - 1)) {
							$('#sp-next').css('opacity','.1');
						}
						$('#sp-prev').css('opacity','1');
						$('.sp-selected .sp-current').removeClass();
						$('.sp-selected .sp-thumbs a:eq('+currentEq+')').addClass('sp-current');
						$('.sp-selected .sp-large').empty().append('<a href='+newImg+'><img src="'+newThumb+'"/></a>');
						$('.sp-lightbox img').fadeOut(250, function() {
							$(this).remove();
							$('.sp-lightbox').data('currenteq',nextEq).append('<img src="'+newImg+'"/>');
							$('.sp-lightbox img').hide().fadeIn(250);
						});
					}

				event.preventDefault();
			});

		// Pagination Backward
			$(document.body).on('click', '#sp-prev', function(event) {

				event.stopPropagation();
				var currentEq = $('.sp-lightbox').data('currenteq'),
					currentEq = currentEq - 1;
					if(currentEq <= 0) {
					} else {
						if (currentEq == 1) {
							$('#sp-prev').css('opacity','.1');
						}
						var nextEq = currentEq - 1,
						newImg = $('.sp-selected .sp-thumbs').find('a:eq('+nextEq+')').attr('href'),
						newThumb = get_url_from_background($('.sp-selected .sp-thumbs').find('a:eq('+nextEq+')').css('backgroundImage'));
						$('#sp-next').css('opacity','1');
						$('.sp-selected .sp-current').removeClass();
						$('.sp-selected .sp-thumbs a:eq('+nextEq+')').addClass('sp-current');
						$('.sp-selected .sp-large').empty().append('<a href='+newImg+'><img src="'+newThumb+'"/></a>');
						$('.sp-lightbox img').fadeOut(250, function() {
							$(this).remove();
							$('.sp-lightbox').data('currenteq',currentEq).append('<img src="'+newImg+'"/>');
							$('.sp-lightbox img').hide().fadeIn(250);
						});
					}
				event.preventDefault();
			});


			// Close Lightbox
			$(document.body).on('click', '.sp-lightbox', function() {
				closeModal();
			});

			// Close on Esc
			$(document).keydown(function(e) {
				if (e.keyCode == 27) {
					closeModal();
					return false;
				}
			});

			function closeModal (){
				$('.sp-selected').removeClass('sp-selected');
				$('.sp-lightbox').fadeOut(function() {
						$(this).remove();
				});
			}


			// Panning zoomed image (non-touch)

			$('.sp-large').mousemove(function(e) {
				var viewWidth = $(this).width(),
					viewHeight = $(this).height(),
					viewOffset = $(this).offset(),
					largeWidth = $(this).find('.sp-zoom').width(),
					largeHeight = $(this).find('.sp-zoom').height(),
					relativeXPosition = (e.pageX - viewOffset.left),
					relativeYPosition = (e.pageY - viewOffset.top),
					moveX = Math.floor((relativeXPosition * (viewWidth - largeWidth) / viewWidth)),
					moveY = Math.floor((relativeYPosition * (viewHeight - largeHeight) / viewHeight));

				$(this).find('.sp-zoom').css({
					left: moveX,
					top: moveY
				});

			});

			function get_url_from_background(bg){
				return bg.match(/url\([\"\']{0,1}(.+)[\"\']{0,1}\)+/i)[1];
			}
		}
		smoothproducts()
	},[])

    return (
            <section className="middle">
				<div className="container">
					<div className="row">
						<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
							<div className="sp-wrap">
								{ data.images?
									data.images.map((image)=>{
										return (
										<a key={image.id}  href={image.image}><img src={image.image} alt=""/></a>
										)
									})
									: 	<div className="sp-loading"><img src="assets/css/img/loading.gif" alt=""/><br/>LOADING IMAGES</div>
								}
							</div>
						</div>
						<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
							<div className="prd_details">
								<div className="prt_01 mb-1"><span className="text-purple bg-light-purple rounded py-1">{data.category}</span></div>
								<div className="prt_02 mb-3">
									<h2 className="ft-bold mb-1" >{data.product_name}</h2>
									<div className="text-left">
										<div className="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star filled"></i>
											<i className="fas fa-star"></i>
											<span className="small">(412 Reviews)</span>
										</div>
										<div className="elis_rty"><span className="ft-medium text-muted line-through fs-md mr-2">₹{data.price}</span><span className="ft-bold theme-cl fs-lg mr-2">₹{data.offer_price}</span><span className="ft-regular text-light bg-success py-1 px-2 fs-sm">In Stock</span></div>
									</div>
								</div>
								
								<div className="prt_03 mb-4">
									<p>{data.description}</p>
								</div>

								<div className="prt_04 mb-4">
									<p className="d-flex align-items-center mb-0 text-dark ft-medium">Size:</p>
									<div className="text-left pb-0 pt-2">
										<div className="form-check form-option size-option form-check-inline mb-2">
											<input className="form-check-input" onChange={handleChange} value='28' type="radio" name="size" id="28"/>
											<label className="form-option-label" htmlFor="28">28</label>
										</div>
										<div className="form-check form-option size-option  form-check-inline mb-2">
											<input className="form-check-input" onChange={handleChange} value='30' type="radio" name="size" id="30"/>
											<label className="form-option-label" htmlFor="30">30</label>
										</div>
										<div className="form-check form-option size-option  form-check-inline mb-2">
											<input className="form-check-input" onChange={handleChange} value='32' type="radio" name="size" id="32" defaultChecked/>
											<label className="form-option-label" htmlFor="32">32</label>
										</div>
										<div className="form-check form-option size-option  form-check-inline mb-2">
											<input className="form-check-input" onChange={handleChange} value='34' type="radio" name="size" id="34"/>
											<label className="form-option-label" htmlFor="34">34</label>
										</div>
										<div className="form-check form-option size-option  form-check-inline mb-2">
											<input className="form-check-input" onChange={handleChange} value='36' type="radio" name="size" id="36"/>
											<label className="form-option-label" htmlFor="36">36</label>
										</div>
										<div className="form-check form-option size-option  form-check-inline mb-2">
											<input className="form-check-input" onChange={handleChange} value='38' type="radio" name="size" id="38"/>
											<label className="form-option-label" htmlFor="38">38</label>
										</div>
										<div className="form-check form-option size-option  form-check-inline mb-2">
											<input className="form-check-input" onChange={handleChange} value='40' type="radio" name="size" id="40"/>
											<label className="form-option-label" htmlFor="40">40</label>
										</div>
										<div className="form-check form-option size-option  form-check-inline mb-2">
											<input className="form-check-input" onChange={handleChange} value='42' type="radio" name="size" id="42"/>
											<label className="form-option-label" htmlFor="42">42</label>
										</div>
										
									</div>
								</div>
								
								<div className="prt_05 mb-4">
									<div className="form-row mb-7">
										<div className="col-12 col-lg-auto">
											{/* <!-- Quantity --> */}
											<select onChange={handleChange} defaultValue='1' name="count" className="mb-2 custom-select">
											  <option value="1">1</option>
											  <option value="2">2</option>
											  <option value="3">3</option>
											  <option value="4">4</option>
											  <option value="5">5</option>
											</select>
										</div>
										<div className="col-12 col-lg">
											{/* <!-- Submit --> */}
											<button type="submit" onClick={() => dispatch(addCart(data.id,user.user_id,value.size,value.count)) } className="btn btn-block custom-height bg-dark mb-2">
												<i className="lni lni-shopping-basket mr-2"></i>Add to Cart 
											</button>
										</div>
										<div className="col-12 col-lg-auto">
											{/* <!-- Wishlist --> */}
											<button onClick={() => dispatch(addFav(data.id,user.user_id))} className="btn custom-height btn-default btn-block mb-2 text-dark" data-toggle="button">
												<i className="lni lni-heart mr-2"></i>Wishlist
											</button>
										</div>
								  </div>
								</div>
								
								<div className="prt_06">
									<p className="mb-0 d-flex align-items-center">
									  <span className="mr-4">Share:</span>
									  <a className="d-inline-flex align-items-center justify-content-center p-3 gray circle fs-sm text-muted mr-2" href="#!">
										<i className="fab fa-twitter position-absolute"></i>
									  </a>
									  <a className="d-inline-flex align-items-center justify-content-center p-3 gray circle fs-sm text-muted mr-2" href="#!">
										<i className="fab fa-facebook-f position-absolute"></i>
									  </a>
									  <a className="d-inline-flex align-items-center justify-content-center p-3 gray circle fs-sm text-muted" href="#!">
										<i className="fab fa-pinterest-p position-absolute"></i>
									  </a>
									</p>
								</div>
								
							</div>
						</div>
					</div>
				</div>
			</section>
    )
}

export default FullView
