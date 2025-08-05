const getUserDetailsPlugin = {
    'HapiSwagger': {
        responses: {
            200: {
                description: 'User Retreive',
            },
            204: undefined, // pass-through "No Content" to swagger definition
            400: {
                description: 'Something wrong happened'
            }
        }
    }
}

const addPostPlugin = {
    'HapiSwagger': {
        responses: {
            200: {
                description: 'Post Added Sucessfully',
            },
            204: undefined, // pass-through "No Content" to swagger definition
            400: {
                description: 'Something wrong happened'
            }
        },

    }
}

const getAllPostPlugin = {
    'HapiSwagger': {
        responses: {
            200: {
                description: 'Post Retreive',
            },
            204: undefined, // pass-through "No Content" to swagger definition
            400: {
                description: 'Something wrong happened'
            }
        }
    }

}

const postDeleteplugin = {
    'HapiSwagger': {
        responses: {
            200: {
                description: 'Deleted Post',
            },
            204: undefined, // pass-through "No Content" to swagger definition
            400: {
                description: 'Something wrong happened'
            }
        }
    }

}

const addCommentsOnAnyPostPlugin = {
    'HapiSwagger': {
        responses: {
            200: {
                description: 'Comment Posted Sucessfully',
            },
            204: undefined, // pass-through "No Content" to swagger definition
            400: {
                description: 'Something wrong happened'
            }
        }
    }
}

const getCommentsOnPostPlugin = {
    'HapiSwagger': {
        responses: {
            200: {
                description: 'Fetch Sucessfully',
            },
            204: undefined, // pass-through "No Content" to swagger definition
            400: {
                description: 'Something wrong happened'
            }
        }
    }
}

const deleteOwnPostCommentsPlugin = {
    'HapiSwagger': {
        responses: {
            200: {
                description: 'Comment Deleted Sucessfully',
            },
            204: undefined, // pass-through "No Content" to swagger definition
            400: {
                description: 'Something wrong happened'
            }
        }
    }
}


const getAllUserImagePlugin = {
    'HapiSwagger': {
        responses: {
            200: {
                description: `All User's Image Retreive`,
            },
            204: undefined, // pass-through "No Content" to swagger definition
            400: {
                description: 'Something wrong happened'
            }
        }
    }

}

const getAllUserPlugin = {
    'HapiSwagger': {
        responses: {
            200: {
                description: `All User's  Retreive`,
            },
            204: undefined, // pass-through "No Content" to swagger definition
            400: {
                description: 'Something wrong happened'
            }
        }
    }

}

const userAddPlugin = {
    'HapiSwagger': {
        responses: {
            200: {
                description: 'User Added Sucessfully',
            },
            204: undefined, // pass-through "No Content" to swagger definition
            400: {
                description: 'Something wrong happened'
            }
        },
        
    }
}

const userDeletionPlugin = {
    'HapiSwagger': {
        responses: {
            200: {
                description: 'User Deleted Sucessfully',
            },
            204: undefined, // pass-through "No Content" to swagger definition
            400: {
                description: 'Something wrong happened'
            }
        }
    }
}

const userLoginPlugin = {
    'HapiSwagger': {
        responses: {
            200: {
                description: 'User Logged in sucessfully and token generated',
            },
            204: undefined, // pass-through "No Content" to swagger definition
            400: {
                description: 'Something wrong happened'
            }
        }
    }
}

const userAccountDeletePlugin = {
    'HapiSwagger': {
        responses: {
            200: {
                description: 'User Deleted Sucessfully',
            },
            204: undefined, // pass-through "No Content" to swagger definition
            400: {
                description: 'Something wrong happened'
            }
        }
    }
}

const resetPasswordPlugin = {
    'HapiSwagger': {
        responses: {
            200: {
                description: 'Password Reset',
            },
            204: undefined, // pass-through "No Content" to swagger definition
            400: {
                description: 'Something wrong happened'
            }
        }
    }
}

const forgetPasswordPlugin = {
    'HapiSwagger': {
        responses: {
            200: {
                description: 'Password forgetted check your mail',
            },
            204: undefined, // pass-through "No Content" to swagger definition
            400: {
                description: 'Something wrong happened'
            }
        }
    }
}

const getOwnPostPlugin = {
    'HapiSwagger': {
        
        responses: {
            200: {
                description: 'Post fetch sucessfully',
            },
            204: undefined, // pass-through "No Content" to swagger definition
            400: {
                description: 'Something wrong happened'
            }
        }
    }

}

const editPostPlugin = {
    'HapiSwagger': {
        responses: {
            200: {
                description: 'Post Updated',
            },
            204: undefined, // pass-through "No Content" to swagger definition
            400: {
                description: 'Something wrong happened'
            }
        }
    }

}

const editOwnCommentPlugin = {
    'HapiSwagger': {
        responses: {
            200: {
                description: 'comments Updated',
            },
            204: undefined, // pass-through "No Content" to swagger definition
            400: {
                description: 'Something wrong happened'
            }
        }
    }

}

const deleteOwnCommentsInAnyPostPlugin ={
    'HapiSwagger': {
        responses: {
            200: {
                description: 'comments deleted',
            },
            204: undefined, // pass-through "No Content" to swagger definition
            400: {
                description: 'Something wrong happened'
            }
        }
    }
}

const getProfileImagPlugin = {
    'HapiSwagger': {
        responses: {
            200: {
                description: 'Photo retrieved',
            },
            204: undefined, // pass-through "No Content" to swagger definition
            400: {
                description: 'Something wrong happened'
            }
        }
    }
}

const getProfileImagKeyPlugin = {
    'HapiSwagger': {
        responses: {
            200: {
                description: 'image key retrieved',
            },
            204: undefined, // pass-through "No Content" to swagger definition
            400: {
                description: 'Something wrong happened'
            }
        }
    }
}

const uploadProfileImagPlugin = {
    'HapiSwagger': {
        responses: {
            200: {
                description: 'Photo uploaded',
            },
            204: undefined, // pass-through "No Content" to swagger definition
            400: {
                description: 'Something wrong happened'
            }
        }
    }
}


module.exports = {
    getUserDetailsPlugin,
    addPostPlugin,
    getAllPostPlugin,
    postDeleteplugin,
    addCommentsOnAnyPostPlugin,
    getCommentsOnPostPlugin,
    deleteOwnPostCommentsPlugin,
    userAddPlugin,
    userLoginPlugin,
    userAccountDeletePlugin,
    resetPasswordPlugin,
    forgetPasswordPlugin,
    getOwnPostPlugin,
    editPostPlugin,
    editOwnCommentPlugin,
    userDeletionPlugin,
    deleteOwnCommentsInAnyPostPlugin,
    getProfileImagPlugin,
    getAllUserImagePlugin,
    getAllUserPlugin,
    uploadProfileImagPlugin,
    getProfileImagKeyPlugin
    
}