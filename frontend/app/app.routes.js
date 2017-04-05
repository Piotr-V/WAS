WEA.config(function ($stateProvider) {
    var questionsState = {
        name: 'questions',
        url: '/questions',
        component: 'questionsList',
        resolve: {}
    };

    var usersState = {
        name: 'users',
        url: '/users',
        component: 'usersList',
        resolve: {}
    }

    var questionPostState = {
        name: 'questionPost',
        url: '/post',
        component: 'questionPost',
        resolve: {}
    }

    $stateProvider.state(questionsState);
    $stateProvider.state(usersState);
    $stateProvider.state(questionPostState);
});