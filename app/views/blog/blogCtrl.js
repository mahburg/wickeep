angular.module('app').controller('blogCtrl', function($scope){
    $scope.blogs = [
        {
            title: 'How to get a free Website',
            date: new Date(),
            text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia dolor obcaecati nesciunt facilis molestiae nemo fugiat commodi quo? Deserunt suscipit accusantium perferendis eveniet adipisci ab incidunt natus velit tempore quasi aliquid tenetur dignissimos illum delectus reiciendis, porro ducimus repudiandae quaerat harum quas consectetur necessitatibus quos exercitationem. Consectetur eum itaque delectus ratione accusantium blanditiis quas expedita est beatae?`,
            author: "Lloyd Grubham"
        }
        ,{
            title: 'How to read your Quarterly Reports',
            date: new Date(),
            text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia dolor obcaecati nesciunt facilis molestiae nemo fugiat commodi quo? Deserunt suscipit accusantium perferendis eveniet adipisci ab incidunt natus velit tempore quasi aliquid tenetur dignissimos illum delectus reiciendis, porro ducimus repudiandae quaerat harum quas consectetur necessitatibus quos exercitationem. Consectetur eum itaque delectus ratione accusantium blanditiis quas expedita est beatae?`,
            author: "Britta Sedgwick"
        }
        ,{
            title: 'Forget your books, forever!',
            date: new Date(),
            text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia dolor obcaecati nesciunt facilis molestiae nemo fugiat commodi quo? Deserunt suscipit accusantium perferendis eveniet adipisci ab incidunt natus velit tempore quasi aliquid tenetur dignissimos illum delectus reiciendis, porro ducimus repudiandae quaerat harum quas consectetur necessitatibus quos exercitationem. Consectetur eum itaque delectus ratione accusantium blanditiis quas expedita est beatae?`,
            author: "Joe Sedgwick"
        }
    ]
});