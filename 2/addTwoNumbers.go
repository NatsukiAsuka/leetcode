func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	if l1 == nil || l2 == nil {
		return nil
	}
	node := &ListNode{Val: 0, Next: nil}
	result := node
	v1 := 0
	v2 := 0
	for l1 != nil && l2 != nil {
		v2 = (l1.Val + l2.Val + v1) % 10
		v1 = (l1.Val + l2.Val + v1) / 10
		node.Next = &ListNode{Val: v2}
		l1 = l1.Next
		l2 = l2.Next
		node = node.Next
		if l1 == nil && l2 == nil {
			break
		}
		if l1 == nil {
			l1 = &ListNode{}
		}
		if l2 == nil {
			l2 = &ListNode{}
		}
	}
	if v1 != 0 {
		node.Next = &ListNode{Val: v1}
	}
	return result.Next
}
