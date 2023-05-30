import React, { useEffect } from 'react'
import { ActivityIndicator, ScrollView, Text, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { get_blog_detail } from '../../store/actions/blog'
import tw from 'twrnc'

const BlogDetailScreen = (props) => {
  const dispatch = useDispatch()
  const blogId = props.route.params.blogId
  const blog_detail = useSelector((state) => state.blog.blog_detail)

  useEffect(() => {
    const fn = async () => {
      if (dispatch && dispatch !== null && dispatch !== undefined) {
        await dispatch(get_blog_detail(blogId))
      }
    }
    fn()
  }, [dispatch])

  return (
    <>
      {blog_detail ? (
        <ScrollView style={tw`flex-1 bg-gray-100`}>
          <Text style={tw`text-center text-2xl font-bold my-5`}>{blog_detail.title}</Text>
          <Text style={tw`text-center text-sm`}>{blog_detail.created_at}</Text>
          <Text style={tw`px-5 py-5`}>{blog_detail.content}</Text>
        </ScrollView>
      ) : (
        <View style={tw`flex-1 justify-center items-center`}>
          <ActivityIndicator size="large" color="orange" />
        </View>
      )}
    </>
  )
}

export default BlogDetailScreen