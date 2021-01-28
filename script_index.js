            var sizes = [
                [300, 250]
            ];
            var PREBID_TIMEOUT = 1000;

            var googletag = googletag || {};
            googletag.cmd = googletag.cmd || [];

            var pbjs = pbjs || {};
            pbjs.que = pbjs.que || [];

            var adUnits = [{
                code: '/19968336/prebid_multiformat_test',
                mediaTypes: {
                        banner: {
                            sizes: sizes
                        },
                        native: {
                            title: {
                                required: true
                            },
                            image: {
                                required: true
                            },
                            sponsoredBy: {
                                required: true
                            }
                        }
                    },
                bids: [{
                    bidder: 'appnexus',
                    params: {
                        placementId: 13232392
                    }
                }]
            }];

            pbjs.que.push(function() {
                pbjs.addAdUnits(adUnits);
            });


            var slot1;
            googletag.cmd.push(function() {
                slot1 = googletag.defineSlot('/19968336/prebid_multiformat_test', [[300, 250],[360,360]], 'div-1')
                	.addService(googletag.pubads());
                googletag.pubads().disableInitialLoad();
                googletag.pubads().enableSingleRequest();
                googletag.enableServices();
            });

            function refreshBid() {
                pbjs.que.push(function() {
                    pbjs.requestBids({
                        timeout: PREBID_TIMEOUT,
                        adUnitCodes: ['/19968336/prebid_multiformat_test'],
                        bidsBackHandler: function() {
                            pbjs.setTargetingForGPTAsync(['/19968336/prebid_multiformat_test']);
                            googletag.pubads().refresh([slot1]);
                        }
                    });
                });
            }


$(document).on('scroll', function() {
  if ($(this).scrollTop() >= $('#new_asts').position().top) {
    console.log('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt massa eros, eget efficitur quam ultrices lacinia. Curabitur condimentum dui eu ligula hendrerit, sed imperdiet ipsum dignissim. Suspendisse id gravida tortor. Nunc vestibulum tincidunt lacinia. Pellentesque sagittis turpis at sapien cursus lobortis. Sed bibendum, ex non sagittis ultrices, turpis diam tincidunt eros, ac auctor ante metus sed nisl. Cras cursus lectus risus, vitae ultricies nulla varius in. Curabitur odio enim, mattis sed feugiat nec, lacinia vel urna. Donec imperdiet dapibus auctor. Nullam id mauris fermentum, dapibus tortor rhoncus, tempus augue. Ut consequat magna justo, sed lacinia sapien egestas eu. Fusce felis erat, sollicitudin non egestas nec, maximus faucibus neque. Proin a ipsum et felis iaculis dignissim eu id nisl. Donec id ante et mi tristique consequat. Praesent sollicitudin suscipit purus a cursus. Vestibulum in dolor lacus. Duis accumsan ante sit amet erat commodo ornare quis id sapien. Integer tristique risus ut interdum ultrices. Sed in ultricies est. Curabitur vehicula lectus nibh, non facilisis orci blandit at. Donec placerat tincidunt leo ac rhoncus. Cras varius ante quis urna scelerisque sodales. Donec quam ante, gravida quis metus et, vehicula tempus odio. Donec efficitur erat nulla. Vestibulum eu libero luctus felis tempor molestie. Nullam pharetra pulvinar erat fringilla tempus.');
  }
})

$(document).on('scroll', function() {
  if ($(this).scrollTop() >= $('#tag_content').position().top) {
    console.log('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt massa eros, eget efficitur quam ultrices lacinia. Curabitur condimentum dui eu ligula hendrerit, sed imperdiet ipsum dignissim. Suspendisse id gravida tortor. Nunc vestibulum tincidunt lacinia. Pellentesque sagittis turpis at sapien cursus lobortis. Sed bibendum, ex non sagittis ultrices, turpis diam tincidunt eros, ac auctor ante metus sed nisl. Cras cursus lectus risus, vitae ultricies nulla varius in. Curabitur odio enim, mattis sed feugiat nec, lacinia vel urna. Donec imperdiet dapibus auctor. Nullam id mauris fermentum, dapibus tortor rhoncus, tempus augue. Ut consequat magna justo, sed lacinia sapien egestas eu. Fusce felis erat, sollicitudin non egestas nec, maximus faucibus neque. Proin a ipsum et felis iaculis dignissim eu id nisl. Donec id ante et mi tristique consequat. Praesent sollicitudin suscipit purus a cursus. Vestibulum in dolor lacus. Duis accumsan ante sit amet erat commodo ornare quis id sapien. Integer tristique risus ut interdum ultrices. Sed in ultricies est. Curabitur vehicula lectus nibh, non facilisis orci blandit at. Donec placerat tincidunt leo ac rhoncus. Cras varius ante quis urna scelerisque sodales. Donec quam ante, gravida quis metus et, vehicula tempus odio. Donec efficitur erat nulla. Vestibulum eu libero luctus felis tempor molestie. Nullam pharetra pulvinar erat fringilla tempus. In sed nibh ac diam feugiat placerat. Nulla at lorem at urna malesuada rhoncus ac feugiat velit. Nam pulvinar, est nec cursus ornare, nunc nisi sodales nisl, id faucibus quam sapien nec nibh. Quisque mollis, est quis consequat dapibus, eros magna aliquam enim, et dictum augue felis et urna. Praesent tincidunt luctus scelerisque. Vestibulum in ullamcorper enim. Etiam nec lacinia est. Nulla sed suscipit ex, eget ornare lacus. Phasellus lorem diam, interdum non elit at, consequat euismod erat. Etiam cursus euismod rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed in interdum magna. Pellentesque dictum mi et facilisis mollis. Sed volutpat eros tincidunt, cursus ipsum in, bibendum lacus. Sed fringilla sem a sem vulputate iaculis. Etiam interdum placerat ante, ac mattis lacus finibus vel. Sed neque tortor, luctus nec cursus sit amet, eleifend vitae lacus. Aenean eget pulvinar neque. Sed interdum augue et dolor consequat eleifend. Proin tellus orci, lacinia at gravida non, suscipit eu metus. Integer fermentum lorem non metus congue sodales. Nullam aliquam lacinia fringilla. Nunc at pulvinar purus, in sollicitudin urna. Nunc sollicitudin ligula vel suscipit tempor. Pellentesque sed ante at elit molestie porta sit amet a ligula. Nulla facilisi. Praesent venenatis accumsan augue. Aliquam pretium, purus non sagittis ultricies, nunc nisl laoreet leo, eu rutrum dui felis vitae diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare turpis vitae magna eleifend suscipit. Fusce nec diam volutpat, faucibus odio convallis, placerat velit. Nunc pulvinar malesuada tristique. Fusce iaculis nulla dui, accumsan semper nisi tristique eu. Vivamus consequat ac turpis et fringilla. Integer sit amet luctus ligula. Quisque sit amet leo porta, finibus elit id, consequat orci. ');
  }
})
