var default_user_name ="TheSunniWayAhlusSunnahwaljamaah";
selectChannel(default_user_name);
/* API */
function selectChannel(user_name) {
	$.ajax({
		url: "https://www.googleapis.com/youtube/v3/channels",
		type: "GET",
		dataType: "json",
		data: {
			part: "contentDetails",
			forUsername: user_name,
			key: $("meta[name=yt-api-k]").attr("value")
		},
		success: function(d) {
			$("#yt_list").html("");
			if (d.pageInfo.totalResults > 0) {
				console.dir(d.items);
				for (let item of d.items) {
					var uploads = item.contentDetails.relatedPlaylists.uploads;
					getVideos(uploads);
				}
			} else {

			}
		},
		error: function(x) {
			console.dir(x);
		}
	});
}
function getVideos(yt_id, next_page = "") {
	var limit = 10;
	var more = "";
	var xhr = $.ajax({
		url: "https://www.googleapis.com/youtube/v3/playlistItems",
		type: "GET",
		dataType: "json",
		data: {
			part: "snippet",
			playlistId: yt_id,
			maxResults: limit,
			pageToken: next_page,
			key: $("meta[name=yt-api-k]").attr("value")
		},
		success: function(data) {
			console.dir(data);
			if (data.nextPageToken) {
				console.log(data.nextPageToken);
				more =
					'<button class="btn btn-dark" id="load-more" data-next-page="' +
					data.nextPageToken +
					'" data-yt-id="' +
					yt_id +
					'">Load more video</button>';
			}

			if (next_page === "") {
				$("#yt_player").attr(
					"src",
					"https://youtube.com/embed/" +
						data.items[0].snippet.resourceId.videoId +
						"?controls=0&showinfo=0&rel=0"
				);
			}
			for (var i = 0; i < limit; i++) {
				var thumb = $("<img class='img-fluid card-img-top'/>").attr(
					"src",
					data.items[i].snippet.thumbnails.medium.url
				);
				var video_id = data.items[i].snippet.resourceId.videoId;
				var link = $("<a class='video-link' data-toggle='modal' data-target='#videoModal'></a>")
					.data("videoid", video_id)
					.append(thumb);
				var title = $("<div class='card-footer text-muted'></div>").append(data.items[i].snippet.title);
				var description = $("<p class='card-text'></p>").append(data.items[i].snippet.description);
				var holder = $("<div class='card videolist'>").append(link, title);
				$("#yt_list").append(holder);
			}
			$("#yt_list").append(more);
		}
	});
	console.dir(xhr);
}

/* load more */
$("#yt_list").on("click", "#load-more", function() {
	$(this)
		.animate(
			{
				"transform":"scaleX(4)",
				"opacity":"0.1"
			},
			function(){
				getVideos($(this).data("yt-id"), $(this).data("next-page"));
				$(this).remove();
			});
});

/* embeds */
$("#yt_list").on("click", "a.video-link", function() {
	var video_id = $(this).data("videoid");
	$("#yt_player").attr(
		"src",
		"https://youtube.com/embed/" +
			video_id +
			"?controls=0&showinfo=0&rel=0&autoplay=1"
	);
});

// lazy load
$("#yt_list").on("scroll", function() {
	if (
		Math.round($(this).scrollTop() + $(this).innerHeight(), 10) >=
		Math.round($(this)[0].scrollHeight, 10) - 5
	) {
		$("#load-more").trigger("click");
	}
});
