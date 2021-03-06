publicAccessible = FlowRouter.group({});

signInRequired = FlowRouter.group({
  triggersEnter: [AccountsTemplates.ensureSignedIn]
});

signInRequired.route('/', {
  name: 'social',
  action: () => {
    BlazeLayout.render('layout', {
      main: 'social'
    });
    setTitle('Social');
  }
});

signInRequired.route('/reviews', {
      name: 'reviews',
      action: () => {
      BlazeLayout.render('layout', {
      main: 'reviews'
    });
setTitle('Reviews');
}
});

signInRequired.route('/music', {
      name: 'music',
      action: () => {
      BlazeLayout.render('layout', {
      main: 'music'
    });
setTitle('Music');
}
});

signInRequired.route('/update-profile', {
  name: 'updateProfile',
  action: () => {
    BlazeLayout.render('layout', {
      main: 'updateProfile'
    });
    setTitle('Update profile');
  }
});

signInRequired.route('/users/:_id', {
  name: 'profile',
  action: () => {
    BlazeLayout.render('layout', {
      main: 'profile'
    });
    setTitle('Profile');
  }
});

signInRequired.route('/browse-users', {
  name: 'browseUsers',
  action: () => {
    BlazeLayout.render('layout', {
      main: 'browseUsers'
    });
    setTitle('Browse users');
  }
});

signInRequired.route('/following', {
  name: 'following',
  action: () => {
    BlazeLayout.render('layout', {
      main: 'following'
    });
    setTitle('Following');
  }
});

signInRequired.route('/follower', {
  name: 'follower',
  action: () => {
    BlazeLayout.render('layout', {
      main: 'follower'
    });
    setTitle('Follower');
  }
});

signInRequired.route('/messages', {
  name: 'messages',
  action: () => {
    BlazeLayout.render('layout', {
      main: 'messages'
    });
    setTitle('Messages');
  }
});
